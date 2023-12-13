import styled from 'styled-components';

export const ListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ItemContacts = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc((100% - 48px) / 3);
  padding-bottom: 20px;
  background-color: var(--main-color);
  color: var(--bg-color);
`;

export const Icon = styled.svg`
  display: flex;
  stroke: var(--second-color);
  fill: var(--second-color);
`;

export const TextContacts = styled.p`
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 2px solid var(--second-color);
  border-top: 2px solid var(--second-color);
  font-family: 'Open Sans SemiBold';
  font-size: 22px;
`;

export const LinkContacts = styled.a`
  font-family: 'Open Sans SemiBold';
  font-size: 22px;
  transition: var(--main-transition);
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 2px solid var(--second-color);
  border-top: 2px solid var(--second-color);

  &::after {
    content: "";
    position: absolute;
    padding-left: 15px;
    transition: var(--main-transition);

    @media screen and (min-width: 480px) {
      content: "\u2192";
    }
  }
 
  &:hover, &:active {
    color: var(--second-color);

    &::after {
      content: "";
      padding-left: 20px;
      color: var(--second-color);

      @media screen and (min-width: 480px) {
        content: "\u27A0";
      }
    }

  }

`;