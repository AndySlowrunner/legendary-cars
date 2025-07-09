import type { Props } from "../../types/CarProps";
import { Card, Image } from "./CarCard.styled";

export const CarCard = ({ carData }: Props) => {
  return (
    <>
      <Card>
        <Image width="480" src={carData.image} alt="legendary car" />
        <p>Brand: {carData.brand}</p>
        <p>Model: {carData.model}</p>
        <p>Year: {carData.year}</p>
        <p>Description: {carData.description}</p>
      </Card>
    </>
  );
};
