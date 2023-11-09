import { lazy } from 'react';
import { Container, Main } from './App.styled';
import ScrollToTop from "react-scroll-to-top";

import {technologies} from '../technologies';

const Background = lazy(() => import('./Background/Background'));
const Header = lazy(() => import('./Header/Header'));
const Hero = lazy(() => import('./Hero/Hero'));
const About = lazy(() => import('./About/About'));
const Technologies = lazy(() => import('./Technologies/Technologies'));
const Projects = lazy(() => import('./Projects/Projects'));
const Contacts = lazy(() => import('./Contacts/Contacts'));

export const App = () => {
  return (
    <Container>
      <Background />
      <Header />
      <Main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contacts />
      </Main>
      <ScrollToTop smooth color="var(--second-color)"/>
    </Container>
  );
};
