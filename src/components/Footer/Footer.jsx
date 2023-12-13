import { MainFooter, TextFooter } from './Footer.styled';
import {Container } from '../App.styled';

const Footer = () => {
  return (
  <Container> 
    <MainFooter>
      <TextFooter>
        &copy; 2022-2023 Webvelsi. <br />
        All rights reserved.
      </TextFooter>
    </MainFooter>
  </Container>   
  )
}

export default Footer;