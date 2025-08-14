// import type { Car } from "../types/CarProps";

import { useParams } from "react-router-dom";
import { getDetails } from "../api/carsApi";
import { useEffect, useState } from "react";
import type { Car } from "../types/CarProps";

// type Props = {};

export const CarDetails = () => {
  const { id } = useParams<{id: string}>();
  const [car, setCar] = useState<Car|null>(null);

  useEffect(() => {
    const details = async () => {
    try {
      const data = await getDetails(id!);
      setCar(data);
    } catch (error) {
      alert(error)
    }
    };
    details();
  }, [])

  if (!car) return <div>Loading...</div>
  return (
    <>
      <div>
        <img src={car.image} alt="Car image" />
        <h1>{car.brand}</h1>
        <p>{car.description}</p>
      </div>
    </>
  );
};
