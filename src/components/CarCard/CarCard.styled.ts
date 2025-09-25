import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Card = styled.div`
  width: 360px;
  border: 1px solid darkgray;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

export const Thumb = styled.div`
  width: 360px;
  height: 240px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const StyledBorderIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  color: white;

  &:hover {
    color: #ff5d94;
  }
`;

export const StyledIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 10px;
  right: 15px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  color: #ff0c6f;

  /* &:hover {
    color: white;
  } */
`;

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 24px;
  color: #ffff;
  background-color: #ff0c6f;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
`;