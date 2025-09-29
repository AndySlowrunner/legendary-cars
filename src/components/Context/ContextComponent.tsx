import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type FavoriteValuesType = {
    favorites: string[],
    addToFavorites: (item: string) => void,
    remoteFavorites: (item: string) => void,
};

const MyContext = createContext<FavoriteValuesType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addToFavorites = (item: string) => {
    setFavorites((prev) => [...prev, item]);
  };

  const remoteFavorites = (item: string) => {
    favorites.filter((el) => el !== item);
  };

  return (
    <MyContext.Provider value={{ favorites, addToFavorites, remoteFavorites }}>
      {children}
    </MyContext.Provider>
  );
};

export const useFavorites = () => {
    const context = useContext(MyContext);
    if (!context)
        throw new Error("useFavorites must be used within FavoritesProvider");
    return context;
};