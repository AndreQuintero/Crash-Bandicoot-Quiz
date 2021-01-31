import React from 'react';
import styled from 'styled-components';
import Widget from '../Widget';
import Dots from '../Dots';
import Loader from './index';

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

export default LoadingBox;
