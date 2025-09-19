import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetails } from "../api/carsApi";
import type { Car } from "../types/CarProps";
import { Container, Info, Picture } from "./CarDetails.styled";
import { BackLink } from "../components/BackLink/BackLink";


export const CarDetails = () => {
  const { id } = useParams<{id: string}>();
  const [car, setCar] = useState<Car | null>(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/collection";

  console.log(car)
  console.log(typeof backLinkHref);
  
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
  },[id])

  if (!car) { return <div>Loading...</div> }
  
  return (
    <>
      <BackLink to={backLinkHref} />
      <Container>
        <Picture src={car.image} alt="Car image" />
        <Info>
          <h1>{car.brand + " " + car.model}</h1>
          <p>{car.description}</p>
        </Info>
      </Container>
    </>
  );
};
