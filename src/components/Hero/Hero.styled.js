import styled from 'styled-components';
import HeroDesktopX1 from '../../images/hero/hero_dd-1x.jpg';
import HeroDesktopX2 from '../../images/hero/hero_dd-2x.jpg';
import HeroMobileX1 from '../../images/hero/hero_md-1x.jpg';
import HeroMobileX2 from '../../images/hero/hero_md-2x.jpg';

export const SectionHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  flex: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  max-width: 320px;
  min-height: 540px;
  max-height: 540px;

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url(${HeroMobileX1});
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${HeroMobileX2});
  } 

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    min-height: 600px;
    gap: 50px;
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
`;

export const HeaderHero = styled.h1`
  font-family: 'Open Sans Bold';
  color: var(--main-color);
  text-align: center;
  font-weight: 900;
  font-size: 26px;
  line-height: calc(42 / 26);
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 44px;
    line-height: calc(60 / 44);
  }

`;



