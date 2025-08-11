import styled from "styled-components";
import heroImg from "../images/hero.jpg";

export const Container = styled.section`
  height: calc(100vh - 90px);
  background-image: linear-gradient(90deg, #111111 400px, rgba(8, 8, 8, 0) 60%),
    url(${heroImg});
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  max-width: 380px;
  height: calc(100vh - 90px);
  margin-left: 40px;
`;