import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  outline: 0;
  margin-top: 25px;
  cursor: pointer;
  background-color:  ${({ theme }) => theme.colors.primary};
  color:  ${({ theme }) => theme.colors.contrastText};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: 0.2s ease-in;
  &:hover:enabled {
    color:  ${({ theme }) => theme.colors.primary};
    background-color:  ${({ theme }) => theme.colors.contrastText};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
