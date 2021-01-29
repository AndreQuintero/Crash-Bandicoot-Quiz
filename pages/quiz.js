import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import { bg, questions } from '../db.json';
import Loader from '../src/components/Loader';
import Dots from '../src/components/Dots';
import StateScreen from '../src/enum/screen-state';
import QuestionWidget from '../src/components/Quiz/questionWidget';
import Result from '../src/components/Quiz/result';
import GitHubCorner from '../src/components/GitHubCorner';

const H3 = styled.h3`
    width: 100%;
    display: flex;
    align-items: center;
`;

const AlignDots = styled.div`
      display: flex;
      align-items: baseline;
      margin-left: 10px;
      margin-top: 7px;
`;

const LoadingBox = () => (
  <Widget>
    <Widget.Header>
      <H3>
        Carregando
        <AlignDots>
          <Dots delay="1s" />
          <Dots delay="1.2s" />
          <Dots delay="1.4s" />
        </AlignDots>
      </H3>
    </Widget.Header>
    <Loader />
  </Widget>
);

export default function QuizPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAlternative, setSelectedAlternative] = useState();
  const [stateScreen, setStateScreen] = useState(StateScreen.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = questions.length;

  useEffect(() => {
    setTimeout(() => {
      setStateScreen(StateScreen.LOADING);
    }, 1 * 2000);
  }, []);

  useEffect(() => {
    setStateScreen(StateScreen.LOADING);
    setTimeout(() => {
      setStateScreen(StateScreen.QUIZ);
    }, 1 * 2000);
  }, [questionIndex]);

  const addResults = (question, alternativeSelected, isCorrect) => {
    setResults([...results, {
      question: question.title,
      alternative: alternativeSelected,
      isCorrect,
    }]);
  };

  const handleClick = (e, index) => {
    setTimeout(() => {
      setSelectedAlternative(index);
      const nextQuestion = questionIndex + 1;
      if (nextQuestion < totalQuestions) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setStateScreen(StateScreen.RESULT);
      }
    }, 2500);
  };

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {stateScreen === StateScreen.QUIZ && (
        <QuestionWidget
          question={questions[questionIndex]}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
          onClick={handleClick}
          addResults={addResults}
        />
        ) }
        {stateScreen === StateScreen.LOADING && <LoadingBox />}
        {stateScreen === StateScreen.RESULT && <Result results={results} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AndreQuintero" />
    </QuizBackground>
  );
}
