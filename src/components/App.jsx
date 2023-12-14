import { lazy } from 'react';
import { Main } from './App.styled';
import ScrollToTop from 'react-scroll-to-top';

const Background = lazy(() => import('./Background/Background'));
const Header = lazy(() => import('./Header/Header'));
const Hero = lazy(() => import('./Hero/Hero'));
const About = lazy(() => import('./About/About'));
const Technologies = lazy(() => import('./Technologies/Technologies'));
const Projects = lazy(() => import('./Projects/Projects'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const Footer = lazy(() => import('./Footer/Footer'));

export const App = () => {
  return (
    <>
      <Background />
      <Header />
      <Main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contacts />
      </Main>
      <Footer />
      <ScrollToTop smooth color="var(--second-color)" />
    </>
  );
};
