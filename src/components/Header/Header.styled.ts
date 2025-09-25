import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  background-color: #5073a5;
`

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #ff5d94;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-family: Arial;
  text-transform: uppercase;
  color: #fff;
`