import styled from 'styled-components';


export const OverlayProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(98, 180, 50, 0.9);

  transform: translateY(100%);
  transition: var(--main-transition);
`;

export const ListProjects = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ItemProjects = styled.li`
  flex-basis: calc((100% - 48px) / 3);
  background-color: var(--main-color);

  border: 2px solid #1eafe9;;

  &:hover {
    ${OverlayProjects} {
      transform: translateY(0);
    }
  }
`;

export const BlockProjects = styled.div`
  position: relative;
  overflow: hidden;
`;

export const OverlayTextProjects = styled.p`
  font-size: 20px;
  line-height: calc(32 / 20);
  padding-left: 15px;
  padding-right: 15px;
`;


export const WrapperProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-top: 2px solid #1eafe9;
  padding-top: 15px;
  padding-bottom: 20px;; 
`;

export const HeaderProjects = styled.h3`
  color: var(--bg-color);
  font-weight: 700;
  font-size: 18px;
  line-height: calc(36 / 18);
  letter-spacing: 0.06em;
`;

export const ButtonsProjects = styled.div`
  display: flex;
  gap: 20px;
`;