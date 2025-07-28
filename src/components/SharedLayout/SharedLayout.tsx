import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { MainContainer } from "./SharedLayout.styled";


export const SharedLayout = () => {
    return (
      <>
        <MainContainer>
          <Header />
          <Outlet />
        </MainContainer>
      </>
    );
}