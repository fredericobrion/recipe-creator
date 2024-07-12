import { extractRecipeName } from "../../utils/recipeExtraction";

type RecipeCardProps = {
  recipe: string;
};

function RecipeCard({ recipe }: RecipeCardProps) {
  return <h3>{extractRecipeName(recipe)}</h3>;
}

export default RecipeCard;
