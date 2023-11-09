import styled from 'styled-components';

export const ListTech = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 42px;
`;

export const ItemTech = styled.li`
  flex-basis: calc((100% - 126px) / 4);
  background-color: var(--main-color);
  border-radius: 10px;
`;