import styled from 'styled-components';

const stylesSvgActive = {
  dark: 'var(--bg-color)',
  white: 'var(--main-color)',
};

export const BurgerMenuContainer = styled.div`
  display: flex;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerMenuBtn = styled.button`
  position: ${props => props.isMenuOpen && "absolute"};
  top: 16px;
  right: 16px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--main-color);
  transform: ${props => props.isMenuOpen ? "translateX(0)" : "translateX(100%)"};
`;

export const Icon = styled.svg`
  stroke: ${props => props.isMenuOpen ? stylesSvgActive.dark : stylesSvgActive.white};
  fill: ${props => props.isMenuOpen ? stylesSvgActive.dark : stylesSvgActive.white};
`;


