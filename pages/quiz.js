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

const Img = styled.img`
        width: 100%;
        height: 150px;
        object-fit: cover;
`;

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

const QuestionWidget = ({
  question, totalQuestions, questionIndex, onClick, isCorrect, color,
}) => {
  const questionId = `question__${questionIndex}`;

  return (
    <>
      <Widget>
        <Widget.Header>
          <h3>Pergunta {questionIndex + 1} de {totalQuestions} </h3>
        </Widget.Header>
        <Img alt="Descrição" src={question.image} />
        <Widget.Content>
          <h2> {question.title} </h2>
          <p> {question.description} </p>
          <form>
            {question.alternatives.map((alternative, index) => {
              const idAlternative = `alternative-${index}`;
              return (
                <Widget.Topic
                  key={idAlternative}
                  as="label"
                  htmlFor={idAlternative}
                  delay={`${0.2 * index}s`}
                  isCorrect={() => isCorrect()}
                  background={color}
                >
                  <input
                    style={{ display: 'none' }}
                    id={idAlternative}
                    name={questionId}
                    type="radio"
                    onClick={(e) => onClick(e)}
                  />
                  {alternative}
                </Widget.Topic>
              );
            })}
          </form>
        </Widget.Content>
      </Widget>
    </>
  );
};

export default function QuizPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [stateScreen, setStateScreen] = useState(StateScreen.LOADING);
  const totalQuestions = questions.length;

  useEffect(() => {
    setTimeout(() => {
      setStateScreen(StateScreen.QUIZ);
    }, 1 * 2000);
  }, []);

  useEffect(() => {
    setStateScreen(StateScreen.LOADING);
    setTimeout(() => {
      setStateScreen(StateScreen.QUIZ);
    }, 1 * 2000);
  }, [questionIndex]);

  const handleClick = (e) => {
    e.preventDefault();
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStateScreen(StateScreen.RESULT);
    }
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
        />
        ) }
        {stateScreen === StateScreen.LOADING && <LoadingBox />}
      </QuizContainer>
    </QuizBackground>
  );
}
