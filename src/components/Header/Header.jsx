import { MainHeader } from './Header.styled';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';


const Header = () => {
  return (
    <MainHeader>
      <Logo />
      <Navigation  />
      <Button name = "Download CV" link="../../../assets/CV_Vladyslav_Simak_Fullstack.pdf" download />
    </MainHeader>
  );
};

export default Header;