import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import {
  extractIngredients,
  extractInstructions,
  extractNutritionalInfo,
  extractRecipeName,
} from "../../utils/recipeExtraction";

function RecipePage() {
  const recipe = useSelector((state: RootState) => state.recipe.value);

  console.log(recipe);

  // console.log('Nome da receita', extractRecipeName(recipe));
  // console.log('Ingredientes: ',extractIngredients(recipe));
  // console.log('Instruções: ', extractInstructions(recipe));
  // console.log('Nutritional :',extractNutritionalInfo(recipe));
  // console.log(recipe)

  // console.log(recipe.split('**')[6]);



  return (
    <div>
      <p>{extractRecipeName(recipe)}</p>
      <div>
        <h2>INGREDIENTES</h2>
        {extractIngredients(recipe).map((ingredient, index) => {
          return <p key={index}>{ingredient}</p>;
        })}
      </div>
      <div>
        <h2>INSTRUÇÕES</h2>
        {extractInstructions(recipe).map((instruction, index) => {
          return <p key={index}>{instruction}</p>;
        })}
      </div>
      <p>{extractNutritionalInfo(recipe)}</p>
    </div>
  );
}

export default RecipePage;
