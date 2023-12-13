import styled from 'styled-components';

export const ListProjects = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

`;

export const ItemProjects = styled.li`
  position: relative;
  height: 550px;
  background-color: var(--main-color);
  border-radius: 10px;
  padding: 40px 25px 25px 25px;

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 48px) / 3);
    height: 500px;
  }
`;

export const DateProjects = styled.p`
  position: absolute;
  top: 10px;
  right: 15px;
  font-family: 'Open Sans Bold';
  color: var(--second-color);
  font-size: 14px;
`;

export const HeaderProjects = styled.h3`
  font-family: 'Open Sans Bold';
  font-size: 24px;
  color: var(--bg-color);
  text-align: center;
  letter-spacing: 0.06em;
`;

export const TextProjects = styled.p`
  font-size: 16px;
  color: #757575;
  text-align: center;
  margin-top: 30px;
`;

export const ImgProjects = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  border: 1px solid #757575;
`;

export const ButtonsProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    Justify-content: center;
  }
`;