import { CardsList } from "../components/CardsList/CardsList";
import { useFavorites } from "../components/Context/ContextHuk";

export const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <ul>
        {favorites.length > 0 ? (
          <CardsList array={favorites}/>
        ) : (
          <p>You have not added any cars yet.</p>
        )}
      </ul>
    </>
  );
};
