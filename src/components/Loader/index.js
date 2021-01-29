import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import * as Loader from '../../../loader.json';

const Div = styled.div`
    min-height: 300px;
    display: flex;
    align-items:center;
    justify-content:center;
    width: 70%;
    margin: auto;
`;

const Load = () => {
  const ref = useRef(null);

  useEffect(() => {
    const load = lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: Loader.default,
    });

    return () => load.destroy();
  }, []);

  return (
    <Div ref={ref} />
  );
};

export default Load;
