import type { Car } from "../../types/CarProps"
import { CarCard } from "../CarCard/CarCard"
type Props = {
    array: Car[]
}
export const CardsList = ({array}:Props) => {
    return (
      <>
        {array.map((item) => (
          <li key={item.id}>
            <CarCard carData={item} />
          </li>
        ))}
      </>
    );
}