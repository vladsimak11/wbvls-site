import styled from 'styled-components';
import { Link } from "react-router-dom";

const stylesBtnActive = {
  green: 'var(--second-color)',
  transparent: 'transparent',
  darkGreen: '#59ad29',
  dark: 'var(--bg-color)',
  white: 'var(--main-color)',
};

export const LinkContact = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; 
  width: 165px;
  padding: 8px 20px;
  font-family: 'Open Sans SemiBold';
  border-radius: 10px;
  border: 2px solid var(--second-color);
  background:  ${props => props.primary ? stylesBtnActive.green : stylesBtnActive.transparent};
  color: ${props => props.colorText ? stylesBtnActive.dark : stylesBtnActive.white};
  transition: var(--main-transition);

  &:hover {
    background: ${props => props.primary ? stylesBtnActive.darkGreen : stylesBtnActive.green };
    border-color: ${props => props.primary ? stylesBtnActive.darkGreen : stylesBtnActive.green };
    color: ${props => props.colorText ? stylesBtnActive.white : stylesBtnActive.white};
  }
`;

