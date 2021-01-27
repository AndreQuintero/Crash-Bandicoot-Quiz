import styled, { keyframes } from 'styled-components';

const DotAnimmation = keyframes`
    0%, 80%, 100% { -webkit-transform: scale(0) };
    40% { -webkit-transform: scale(1.0) };
`;

const Dots = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.contrastText};
    animation: ${DotAnimmation} 1.4s infinite ease-in-out both;
    -webkit-animation: ${DotAnimmation} 1.4s infinite ease-in-out both;
    -webkit-animation-delay: ${({ delay }) => delay};
    animation-delay: ${({ delay }) => delay};
    margin-right: 5px;
`;

export default Dots;
