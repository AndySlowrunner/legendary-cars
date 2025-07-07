import type {Car} from "../types/Car";

const CarCard = (carData: Car) => {
    return (
      <>
        <div>
          <img src={carData.image} alt="legendary car" />
          <p>Brand: {carData.brand}</p>
          <p>Model: {carData.model}</p>
          <p>Year: {carData.year}</p>
          <p>Description: {carData.description}</p>
        </div>
      </>
    );
}

export default CarCard;