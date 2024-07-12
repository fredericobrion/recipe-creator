import { useState } from "react";
import {
  getFavoritesRecipe,
  removeFavoriteRecipe,
  addFavoritesRecipe,
} from "../../utils/favoritesRecipe";
import RecipeCard from "../../components/recipesCard";

function FavoritesPage() {
  const [favoritesRecipes, setFavoritesRecipes] = useState<string[]>(
    getFavoritesRecipe()
  );

  console.log(favoritesRecipes);

  return (
    <div>
      <h1>Favorites</h1>
      {favoritesRecipes.map((recipe) => (
        <RecipeCard
          key={recipe}
          recipe={recipe}
        />
      ))}
    </div>
  );
}

export default FavoritesPage;
