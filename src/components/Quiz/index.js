import React, { useEffect, useState } from 'react';
import QuizBackground from '../QuizBackground';
import QuizContainer from '../QuizContainer';
import QuizLogo from '../QuizLogo';
import StateScreen from '../../enum/screen-state';
import QuestionWidget from './questionWidget';
import Result from './result';
import GitHubCorner from '../GitHubCorner';
import LoadingBox from '../Loader/loading-box';

export default function QuizPage({ bg, questions, external = false }) {
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
        {stateScreen === StateScreen.RESULT && <Result external={external} results={results} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AndreQuintero" />
    </QuizBackground>
  );
}
