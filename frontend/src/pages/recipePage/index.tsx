import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import {
  extractIngredients,
  extractInstructions,
  extractNutritionalInfo,
  extractRecipeName,
} from "../../utils/recipeExtraction";
import styles from "./recipePage.module.css";
import classNames from "classnames";
import { cleanCookingMethods } from "../../state/cookingMethods/cookingMethodsSlice";
import { cleanIngredients } from "../../state/ingredients/ingredientsSlice";
import { cleanSpices } from "../../state/spices/spicesSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartSwitch } from "@anatoliygatt/heart-switch";
import {
  getFavoritesRecipe,
  removeFavoriteRecipe,
  addFavoritesRecipe,
} from "../../utils/favoritesRecipe";

function RecipePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [favoritesRecipes, setFavoritesRecipes] = useState<string[]>(
    getFavoritesRecipe()
  );

  const recipe = useSelector((state: RootState) => state.recipe.value);
  const darkTheme = useSelector((state: RootState) => state.theme.dark);

  const isFavorite = favoritesRecipes.includes(recipe);

  const handleAddRecipe = (recipe: string) => {
    setFavoritesRecipes([...favoritesRecipes, recipe]);
    addFavoritesRecipe(recipe);
  };

  const handleRemoveRecipe = (recipe: string) => {
    setFavoritesRecipes(favoritesRecipes.filter((r) => r !== recipe));
    removeFavoriteRecipe(recipe);
  };

  useEffect(() => {
    if (recipe === "") {
      navigate("/");
    } else {
      dispatch(cleanCookingMethods());
      dispatch(cleanIngredients());
      dispatch(cleanSpices());
    }
  }, []);

  return (
    <div
      className={classNames(styles.container, {
        [styles.container__light]: !darkTheme,
      })}
    >
      <div className={styles.recipeNameContainer}>
        <h2 className={styles.recipeName}>{extractRecipeName(recipe)}</h2>
        <HeartSwitch
          size="sm"
          inactiveTrackFillColor="#eca6a6"
          inactiveTrackStrokeColor="#e58e8e"
          activeTrackFillColor="#a71c1c"
          activeTrackStrokeColor="#970b0b"
          inactiveThumbColor="#ecfeff"
          activeThumbColor="#ebaeae"
          onChange={() =>
            isFavorite ? handleRemoveRecipe(recipe) : handleAddRecipe(recipe)
          }
        />
      </div>
      <div>
        <h3 className={styles.subTitle}>Ingredientes</h3>
        {extractIngredients(recipe).map((ingredient, index) => {
          return (
            <p key={index} className={styles.item}>
              - {ingredient}
            </p>
          );
        })}
      </div>
      <div>
        <h3 className={styles.subTitle}>Instruções</h3>
        {extractInstructions(recipe).map((instruction, index) => {
          return (
            <p key={index} className={styles.item}>{`${
              index + 1
            }) ${instruction}`}</p>
          );
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
