import { CardsList } from "../components/CardsList/CardsList"
import { arr } from "../data/legendaryCars"
import { allowedDecades, type Car, type Decade } from "../types/CarProps";

const isValidDecade = (value: string): value is Decade =>
  allowedDecades.includes(value as Decade);


export const Home = () => {
  const validatedCars = arr.filter((car): car is Car =>
    isValidDecade(car.decade)
  );
  return (
    <>
      <ul>
        <CardsList array={validatedCars} />
      </ul>
    </>
  );
}