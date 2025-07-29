import type { Props } from "../../types/CarProps";
import { Card, Image, Thumb, StyledButton } from "./CarCard.styled";

export const CarCard = ({ carData }: Props) => {
  return (
    <>
      <Card>
        <Thumb>
          <Image src={carData.image} alt="legendary car" />
        </Thumb>
        <p>
          {carData.brand} {carData.model}
        </p>
        <StyledButton>More details</StyledButton>
      </Card>
    </>
  );
};
