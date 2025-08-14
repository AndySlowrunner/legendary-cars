import { useNavigate } from "react-router-dom";
import type { Props } from "../../types/CarProps";
import { Card, Image, Thumb, StyledButton } from "./CarCard.styled";

export const CarCard = ({ carData }: Props) => {
  const navigate = useNavigate();

  const handlClick = () => {
    navigate("/car/:id");
  }
  
  return (
    <>
      <Card>
        <Thumb>
          <Image src={carData.image} alt="legendary car" />
        </Thumb>
        <p>
          {carData.brand} {carData.model}
        </p>
        <StyledButton onClick={handlClick}>More details</StyledButton>
      </Card>
    </>
  );
};
