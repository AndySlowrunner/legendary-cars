import type { Car } from "../../types/CarProps"
import { CarCard } from "../CarCard/CarCard"
import { ListContainer } from "./CardsList.styled"
type Props = {
    array: Car[]
}


export const CardsList = ({ array }: Props) => {

    return (
      <>
        <ListContainer>
          {array.map((item) => (
            <li key={item.id}>
              <CarCard carData={item} />
            </li>
          ))}
        </ListContainer>
      </>
    );
}