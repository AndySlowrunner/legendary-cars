import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 394px;

  /* Середній екран */
  @media (min-width: 960px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 394px);
  }

  /* Великий екран */
  @media (min-width: 1281px) {
    grid-template-columns: repeat(3, 394px);
  }
  gap: 20px;
  justify-content: center;
  margin: 40px auto;
`;