export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  decade: '1950s' | '1960s' | '1970s' | '1980s' | '1990s' | '2000s' | '2010s' | '2020s';
  description: string;
  image: string;
}

export interface Props {
  carData: Car;
}