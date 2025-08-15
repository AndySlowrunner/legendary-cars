import { useEffect, useState } from "react";
import { CardsList } from "../components/CardsList/CardsList";
import type { Car } from "../types/CarProps";
import { fetchCars } from "../api/carsApi";
import { BtnContainer, StyledBtn } from "../components/CardsList/CardsList.styled";

export const Collection = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars(page);
        setCars((prev) => [...prev, ...data]);
      } catch (error) {
        alert(error);
      }
    };
    getCars();
  }, [page]);

  const handleClick = () => {
    setPage(prev => prev +1);
  }

    return (
      <>
        <ul>
          <CardsList array={cars} />
        </ul>
        <BtnContainer>
          <StyledBtn onClick={handleClick}>Load more</StyledBtn>
        </BtnContainer>
      </>
    );
}