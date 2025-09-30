import { useNavigate } from "react-router-dom";
import type { Props } from "../../types/CarProps";
import {
  Card,
  Image,
  Thumb,
  StyledButton,
  StyledBorderIcon,
  StyledIcon,
} from "./CarCard.styled";
import { useFavorites } from "../Context/ContextHuk";

export const CarCard = ({ carData }: Props) => {
  const navigate = useNavigate();
  const { favorites, addToFavorites, removeFavorites } = useFavorites();

  const isFavorite = favorites.some(item => item.id === carData.id);

  const handlClick = () => {
    navigate(`/collection/${carData.id}`);
  }
  
  return (
    <>
      <Card>
        <Thumb>
          <Image src={carData.image} alt="legendary car" />
          {isFavorite ? (
            <StyledIcon
              onClick={() => removeFavorites(carData)}
              fontSize="large"
            />
          ) : (
            <StyledBorderIcon
              onClick={() => addToFavorites(carData)}
              fontSize="large"
            />
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
