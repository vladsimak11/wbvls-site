import { MainHeader } from './Header.styled';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';


const Header = () => {
  return (
    <MainHeader>
      <Logo />
      <Navigation  />
      <Button name = "Download CV" link="https://drive.google.com/file/d/1lGhNoAITx_fIuMju3vPiFf-_ZnE63zrZ/view?usp=drive_link" />
    </MainHeader>
  );
};

export default Header;