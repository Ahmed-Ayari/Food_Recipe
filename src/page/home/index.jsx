import { useContext } from "react";
import { GlobalContext } from "../../context";
import Recipe from "../../components/recipeList/Recipe";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  loading ? <div>Loading... Please Wait!</div> : null;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <Recipe key={item.id} item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Enter an item to view recipes
        </div>
      )}
    </div>
  );
}
