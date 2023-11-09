import styled from 'styled-components';

import BgMobileX1 from '../../images/background/bg-md-x1.png';
import BgMobileX2 from '../../images/background/bg-md-x2.png';
import BgTableX1 from '../../images/background/bg-td-x1.png';
import BgTableX2 from '../../images/background/bg-td-x2.png';
import BgDesktopX1 from '../../images/background/bg-dd-x1.png';
import BgDesktopX2 from '../../images/background/bg-dd-x2.png';

export const BackgroundImages = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* background-attachment: scroll; */
  
  background-image: url(${BgMobileX1});
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${BgMobileX2});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${BgTableX1});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${BgTableX2});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${BgDesktopX1});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${BgDesktopX2});
    }
  }
  z-index: -1;
`;
