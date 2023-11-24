import React, { useState } from 'react';
import { BurgerMenuContainer, BurgerMenuBtn, Menu, Icon } from './BurgerMenu.styled';
import Button from '../Button/Button';
import icon from '../../images/icons.svg';

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <BurgerMenuContainer>
      <BurgerMenuBtn onClick={toggleMenu}>
        { !isMenuOpen && (
          <Icon width={56} height={56} isMenuOpen={isMenuOpen}>
            <use href={`${icon}#icon-menu`}></use>
          </Icon>
        )}
      </BurgerMenuBtn>

      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen}>
          <BurgerMenuBtn onClick={toggleMenu} isMenuOpen={isMenuOpen}>
            <Icon width={56} height={56} isMenuOpen={isMenuOpen} >
              <use href={`${icon}#icon-close`}></use>
            </Icon>
          </BurgerMenuBtn>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab?</p>
          <Button name = "Download CV" link="https://drive.google.com/file/d/1lGhNoAITx_fIuMju3vPiFf-_ZnE63zrZ/view?usp=drive_link" primary diploma isMobile />
        </Menu>
      )}
    </BurgerMenuContainer>
  )
}

export default BurgerMenu;
