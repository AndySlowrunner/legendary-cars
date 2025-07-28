import { CarCard } from "../components/CarCard/CarCard"
import { Study } from "../components/StudyComponent";
import type { Car } from "../types/CarProps";

const obj: Car = {
  id: "1",
  brand: "Mercedes-Benz",
  model: "300SL",
  year: 1954,
  decade: "1950s",
  description:
    "Перший у світі серійний автомобіль з дверима типу 'крило чайки'. Один з найшвидших авто свого часу.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/d/d2/Mercedes-Benz_W198_300_SL_Gullwing_Genf_2019_1Y7A4986.jpg",
};

export const Home = () => {
    return (
      <>
        <CarCard carData={obj} />
        <Study></Study>
      </>
    );
}