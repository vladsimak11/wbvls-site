import styled from 'styled-components';

export const ListContacts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ItemContacts = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-basis: calc((100% - 48px) / 3);
`;

export const Icon = styled.svg`
  display: flex;
  stroke: currentColor;;
  fill: currentColor;;
`;

export const TextContacts = styled.p`
  font-family: 'Open Sans SemiBold';
  font-size: 22px;
`;

export const LinkContacts = styled.a`
  font-family: 'Open Sans SemiBold';
  font-size: 22px;
  border-bottom: 2px solid var(--main-color);

  transition: var(--main-transition);

  &:hover {
    color: var(--second-color);
    border-color: var(--second-color);
  }

`;