import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 25px 0 0 25px;
  width: 96px;
  gap: 12px;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
  color: black;

  &:hover {
    color: #ff0c6f;
  }

  p {
    margin: 0;
  }
`;