import { CardsList } from "../components/CardsList/CardsList"
import { fetchCars } from "../api/carsApi";
import { useEffect, useState } from "react";
import type { Car } from "../types/CarProps";


export const Home = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch(error) {
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