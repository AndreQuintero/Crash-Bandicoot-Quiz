import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 38px;
    padding: 7px 0 7px 15px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: transparent;
    border: 1px solid  ${({ theme }) => theme.colors.primary};
    outline: none;
    color:  ${({ theme }) => theme.colors.contrastText};
    font-size: 14px;
    margin-top: 25px;
`;

export default Input;
