import styled from 'styled-components';

export const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutPicture = styled.div`
  border: 5px solid var(--main-color);
`;

export const AboutInfo = styled.div`
  width: 280px;
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 700px;
    align-items: center;
    gap: 30px;
    font-size: 22px;
  }
`;

export const AboutText = styled.div`
  line-height: 1.5;
`;

export const AboutSpan = styled.span`
  font-family: 'Open Sans SemiBold';
  color: var(--second-color);
`;




