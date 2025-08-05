
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  description: string;
  image: string;
}

export interface Props {
  carData: Car;
}
