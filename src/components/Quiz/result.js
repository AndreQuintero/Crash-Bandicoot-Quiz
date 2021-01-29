/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import Widget from '../Widget';
import Gauge from '../Gauge/gauge';
import { result } from '../../../db.json';
import Img from '../Img';

const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-5%);
`;

const Result = ({ results }) => {
  const total = results.length;
  const totalCorrect = results.filter((res) => res.isCorrect).length;
  const correctQuestions = results.filter((res) => res.isCorrect);
  const incorrectQuestions = results.filter((res) => !res.isCorrect);
  const percent = (totalCorrect / total) * 100;

  return (
    <>
      <Widget>
        <Widget.Header>
          <h3>Resultado</h3>
        </Widget.Header>
        <Widget.Content>
          <Flex>
            <Gauge
              percent={percent}
            />
          </Flex>
        </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Header>
          <h3>Você acertou um total de {totalCorrect} de {total}</h3>
        </Widget.Header>
        <Widget.Content>
          <Img alt="Descrição" src={result.bad} />
          <p>Mais sorte na próxima vez...</p>
        </Widget.Content>
        <Widget.Content>
          <h4>Questões Corretas:</h4>
          {correctQuestions.length > 0 && correctQuestions.map((correct, index) => (
            <p key={`correct-${index}`}>{correct.question} R:{correct.alternative}</p>
          ))}
          {correctQuestions.length === 0 && <p>Você não acertou nenhuma questão :(</p>}
        </Widget.Content>
        <Widget.Content>
          <h4>Questões Incorretas:</h4>
          {correctQuestions.length > 0 && incorrectQuestions.map((incorrect, index) => (
            <p key={`incorrect-${index}`}>{incorrect.question} R:{incorrect.alternative}</p>
          ))}
          {incorrectQuestions.length === 0 && <p>Você acertou todas as questões :O</p>}
        </Widget.Content>
      </Widget>
    </>
  );
};

export default Result;
