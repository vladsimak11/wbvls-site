import styled from 'styled-components';

export const ListTech = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 42px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ItemTech = styled.li`
  display: flex;
  justify-content: center;

  flex-basis: calc((100% - 126px) / 4);
  background-color: var(--main-color);
  border-radius: 10px;
`;