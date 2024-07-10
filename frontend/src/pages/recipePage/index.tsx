import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import {
  extractIngredients,
  extractInstructions,
  extractNutritionalInfo,
  extractRecipeName,
} from "../../utils/recipeExtraction";
import styles from "./recipePage.module.css";

function RecipePage() {
  const recipe = useSelector((state: RootState) => state.recipe.value);

  return (
    <div className={styles.container}>
      <h2 className={styles.recipeName}>{extractRecipeName(recipe)}</h2>
      <div>
        <h3 className={styles.subTitle}>Ingredientes</h3>
        {extractIngredients(recipe).map((ingredient, index) => {
          return <p key={index} className={styles.item}>- {ingredient}</p>;
        })}
      </div>
      <div>
        <h3 className={styles.subTitle}>Instruções</h3>
        {extractInstructions(recipe).map((instruction, index) => {
          return <p key={index} className={styles.item}>{`${index + 1}) ${instruction}`}</p>;
        })}
      </div>
      <div>
        <h3 className={styles.subTitle}>Informações Nutricionais</h3>
        {extractNutritionalInfo(recipe).map(([key, value], index) => {
          return (
            <p key={index} className={styles.item}>
              <span>- {key}</span>: <span>{value}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default RecipePage;
