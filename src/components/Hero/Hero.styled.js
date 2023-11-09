import styled from 'styled-components';
import HeroDesktopX1 from '../../images/hero/hero_dd-1x.jpg';
import HeroDesktopX2 from '../../images/hero/hero_dd-2x.jpg';

export const SectionHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex: 1;

  max-width: 1280px;
  min-height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1280px) {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ), url(${HeroDesktopX1});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),
      url(${HeroDesktopX2});
    }
  }

  // border-top: 3px solid transparent;
  // border-image: linear-gradient(90deg, hsla(0, 71%, 99%, 1) 10%, hsla(98, 57%, 45%, 1) 100%);
  // border-image-slice: 1;
  // width:100%;
`;

export const HeaderHero = styled.h1`
  font-family: 'Open Sans Bold';
  color: var(--main-color);
  text-align: center;
  font-weight: 900;
  font-size: 44px;
  line-height: calc(60 / 44);
  text-transform: uppercase;
`;



