/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Widget from '../Widget';
import Gauge from '../Gauge/gauge';
import { result } from '../../../db.json';
import Img from '../Img';
import Colors from '../../enum/colors';

const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-5%);
`;

const P = styled.p`
  color:  ${({ color }) => color || '#FFF'};
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Result = ({ results, external }) => {
  const total = results.length;
  const totalCorrect = results.filter((res) => res.isCorrect).length;
  const correctQuestions = results.filter((res) => res.isCorrect);
  const incorrectQuestions = results.filter((res) => !res.isCorrect);
  const percent = (totalCorrect / total) * 100;
  const { name } = useRouter().query;
  const status = () => {
    if (percent >= 75) {
      return result.good;
    } if (percent < 75 && percent >= 50) {
      return result.regular;
    }
    return result.bad;
  };

  const getName = () => {
    if (name) {
      return name;
    }
    return '';
  };

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
          <Img alt="Descrição" src={external ? status().imageExternal : status().image} />
          <P>{`${getName()} ${getName() !== '' ? ',' : ''}  ${external ? status().messageExternal : status().message}`}</P>
        </Widget.Content>
        <Widget.Content>
          <h4>Questões que você acertou:</h4>
          {correctQuestions.length > 0 && correctQuestions.map((correct, index) => (
            <div key={`correct-${index}`}>
              <p>{correct.question}</p>
              <P color={Colors.LIMEGREEN}>{correct.alternative}</P>
            </div>
          ))}
          {correctQuestions.length === 0 && <p>Você não acertou nenhuma questão :(</p>}
        </Widget.Content>
        <Widget.Content>
          <h4>Questões que você errou:</h4>
          {incorrectQuestions.length > 0 && incorrectQuestions.map((incorrect, index) => (
            <div key={`incorrect-${index}`}>
              <p>{incorrect.question}</p>
              <P color={Colors.CORAL}>{incorrect.alternative}</P>
            </div>
          ))}
          {incorrectQuestions.length === 0 && <p>Você acertou todas as questões :D</p>}
        </Widget.Content>
      </Widget>
    </>
  );
};

export default Result;
