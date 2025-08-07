import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  border-bottom: 1.5px solid black;
  background-color: darkgray;
`

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: #ff0c6f;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-family: Arial;
  text-transform: uppercase;
  color: #fff;
`