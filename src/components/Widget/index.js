import styled, { keyframes } from 'styled-components';
import Colors from '../../enum/colors';

const animationTopic = keyframes`
 0% {
    opacity: 0;
    transform: scale(.1);
    transform: translate3d(-50px, 0, 0);
  }

  85% {
    opacity: 1;
    transform: scale(1.05);
    transform: translate3d(15px, 0, 0);
  }
  100% {
    transform: scale(1);
    transform: translate3d(0, 0, 0);
  }
`;

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme, color, selected }) => {
    if (color === Colors.DEFAULT && !selected) {
      return `${theme.colors.primary}40`;
    } if (color === Colors.GREEN && selected) {
      return Colors.GREEN;
    } if (color === Colors.RED && selected) {
      return Colors.RED;
    }
    return `${theme.colors.primary}40`;
  }
};
  padding: 15px 20px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  animation: ${animationTopic} 0.2s linear both;
  -webkit-animation: ${animationTopic} 0.2s linear both;
  animation-delay: ${({ delay }) => delay};
  -webkit-animation-delay:  ${({ delay }) => delay};
  &:focus,
  &:hover {
    opacity: ${({ color, selected }) => {
    if (color !== Colors && selected) {
      return '1';
    }
    return '0.5';
  }};
  }
`;

export default Widget;
