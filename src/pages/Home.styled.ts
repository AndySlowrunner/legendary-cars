import styled from "styled-components";
import heroImg from "../images/hero.jpg";

export const Container = styled.section`
  height: 100vh;
  background-image: linear-gradient(
      90deg,
      #111111 30%,
      rgba(8, 8, 8, 0) 60%
    ),
    url(${heroImg});
  background-position: center;
  background-size: cover;
  width: 100%;
`

export const Thumb = styled.div`
    display: flex;
    align-items: center;
    width: 380px;
    height: 100vh;
    margin-left: 40px;
`