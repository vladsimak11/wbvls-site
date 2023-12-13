import styled from 'styled-components';

import Hero320X1 from '../../images/hero/hero_320-1x.jpg';
import Hero640X2 from '../../images/hero/hero_640-2x.jpg';
import Hero400X1 from '../../images/hero/hero_400-1x.jpg';
import Hero800X2 from '../../images/hero/hero_800-2x.jpg';
import Hero480X1 from '../../images/hero/hero_480-1x.jpg';
import Hero960X2 from '../../images/hero/hero_960-2x.jpg';
import Hero1280X1 from '../../images/hero/hero_1280-1x.jpg';
import Hero2560X2 from '../../images/hero/hero_2560-2x.jpg';

export const SectionHero = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-width: 320px;
  min-height: 540px;

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url(${Hero320X1});
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${Hero640X2});
  } 

  @media screen and (min-width: 400px) {
    max-width: 480px;
    min-height: 600px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ), url(${Hero400X1});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),
      url(${Hero800X2});
    }  
  }

  @media screen and (min-width: 480px) {
    max-width: 480px;
    min-height: 600px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ), url(${Hero480X1});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),
      url(${Hero960X2});
    }  
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    min-height: 600px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ), url(${Hero1280X1});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),
      url(${Hero2560X2});
    }  
  }
`;

export const BlockHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media screen and (min-width: 1280px) {
    gap: 50px;
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

  @media screen and (min-width: 480px) {
    font-size: 36px;
    line-height: calc(52 / 36);
  }

  @media screen and (min-width: 1280px) {
    font-size: 44px;
    line-height: calc(60 / 44);
  }

`;



