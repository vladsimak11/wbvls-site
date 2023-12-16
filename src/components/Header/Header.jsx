import { MainHeader } from './Header.styled';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import {Container} from '../App.styled';

import { useScreenDetector } from "../useScreenDetector/useScreenDetector";

const Header = () => {
  const { isTablet } = useScreenDetector();

  return (
    <Container>
      <MainHeader>
        <Logo />
        <Navigation  />
        {isTablet && <Button name = "Download CV" link="https://drive.google.com/file/d/1lGhNoAITx_fIuMju3vPiFf-_ZnE63zrZ/view?usp=drive_link" />}
        <BurgerMenu />
      </MainHeader>
    </Container>  
  )
};

export default Header;