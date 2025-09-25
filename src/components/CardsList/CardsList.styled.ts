import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 394px;

  @media (min-width: 960px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 394px);
  }

  @media (min-width: 1281px) {
    grid-template-columns: repeat(3, 394px);
  }
  gap: 20px;
  justify-content: center;
  margin: 40px auto;
`

export const BtnContainer = styled.div`
display: flex;
justify-content: center;
`

export const StyledBtn = styled.button`
  display: inline-block;
  margin-bottom: 20px;
  padding: 14px 48px;
  color: #ffff;
  background-color: #3b4f6d;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
`;