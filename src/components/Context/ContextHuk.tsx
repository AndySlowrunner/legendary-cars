import { createContext, useContext } from "react";
import type { Car } from "../../types/CarProps";

type FavoriteValuesType = {
    favorites: Car[];
    addToFavorites: (item: Car) => void;
    removeFavorites: (item: Car) => void;
};

export const MyContext = createContext<FavoriteValuesType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(MyContext);
  if (!context)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
};
