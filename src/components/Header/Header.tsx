import { Container, StyledLink, StyledNav, Title } from "./Header.styled";

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
        <Title>Legendary cars</Title>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/collection">Collection</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </StyledNav>
      </Container>
    </>
  );
}