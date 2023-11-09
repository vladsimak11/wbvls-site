import { MainNav, Link } from './Navbar.styled';

const Navbar = () => {
  return  (
    <MainNav>
      <Link smooth to="#home" >
        Home
      </Link>
      <Link smooth to="#about">
        About Me
      </Link>
      <Link smooth to="#technologies">
        Technologies
      </Link>
      <Link smooth to="#projects">
        Projects
      </Link>
      <Link smooth to="#contacts">
        Contacts
      </Link>
    </MainNav>
  );
};

export default Navbar;
