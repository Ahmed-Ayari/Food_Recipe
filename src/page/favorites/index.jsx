import { useContext } from "react";
import { GlobalContext } from "../../context";
import Recipe from "../../components/recipeList/Recipe";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => <Recipe key={item.id} item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
          You don&apos;t have any favorite recipes
        </div>
      )}
    </div>
  );
}
