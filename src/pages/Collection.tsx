import { useEffect, useState } from "react";
import { CardsList } from "../components/CardsList/CardsList";
import type { Car } from "../types/CarProps";
import { fetchCars } from "../api/carsApi";

export const Collection = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (error) {
        alert(error);
      }
    };
    getCars();
  }, []);

    return (
      <>
        <ul>
          <CardsList array={cars} />
        </ul>
      </>
    );
}