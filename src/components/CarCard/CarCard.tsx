import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Props } from "../../types/CarProps";
import {
  Card,
  Image,
  Thumb,
  StyledButton,
  StyledBorderIcon,
  StyledIcon,
} from "./CarCard.styled";

export const CarCard = ({ carData }: Props) => {
  const [isFavorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  const handlClick = () => {
    navigate(`/collection/${carData.id}`);
  }

  const handlExchange = () => {
    setFavorite(true);
  }
  
  return (
    <>
      <Card>
        <Thumb>
          <Image src={carData.image} alt="legendary car" />
          {isFavorite ? (
            <StyledIcon fontSize="large" />
          ) : (
            <StyledBorderIcon onClick={handlExchange} fontSize="large" />
          )}
        </Thumb>
        <p>
          {carData.brand} {carData.model}
        </p>
        <StyledButton onClick={handlClick}>More details</StyledButton>
      </Card>
    </>
  );
};
