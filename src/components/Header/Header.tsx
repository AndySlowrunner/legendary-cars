import { NavLink } from "react-router-dom"
import { Container, StyledNav } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <Container>
        <img
          src="../public/images/car.svg"
          alt="Logo"
          width={100}
          height={90}
        />
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </StyledNav>
      </Container>
    </>
  );
}