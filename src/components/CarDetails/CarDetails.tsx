import type { Car } from "../../types/CarProps"

type Props = {
    car: Car
}

export const Details = ({car}: Props) => {
    return (
      <>
        <div>
          <img src={car.image} alt="Car image" />
          <h1>{car.brand}</h1>
          <p>{car.description}</p>
        </div>
      </>
    );
}