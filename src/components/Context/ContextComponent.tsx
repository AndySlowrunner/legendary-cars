import { useState } from "react";
import type { ReactNode } from "react";
import { MyContext } from "./ContextHuk";
import type { Car } from "../../types/CarProps";

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Car[]>([]);

  const addToFavorites = (item: Car) => {
    setFavorites((prev) => [...prev, item]);
  };

  const removeFavorites = (item: Car) => {
    setFavorites((prev) => prev.filter((el) => el.id !== item.id));
  };

  return (
    <MyContext.Provider value={{ favorites, addToFavorites, removeFavorites }}>
      {children}
    </MyContext.Provider>
  );
};
