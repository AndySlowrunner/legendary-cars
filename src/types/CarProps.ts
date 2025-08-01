export const allowedDecades = [
  "1950s",
  "1960s",
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "2010s",
  "2020s",
] as const;

export type Decade = (typeof allowedDecades)[number];

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  decade: Decade;
  description: string;
  image: string;
}

export interface Props {
  carData: Car;
}
