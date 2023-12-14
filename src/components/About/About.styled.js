import styled from 'styled-components';

export const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const AboutPicture = styled.img`
  border: 5px solid var(--main-color);

  @media screen and (max-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }

`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  text-align: center;

  @media screen and (min-width: 480px) {
    width: 440px;
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 700px;
    gap: 30px;
    font-size: 22px;
    text-align: start;
  }
`;

export const AboutText = styled.div`
  line-height: 1.5;
`;

export const AboutSpan = styled.span`
  font-family: 'Open Sans SemiBold';
  color: var(--second-color);
`;





