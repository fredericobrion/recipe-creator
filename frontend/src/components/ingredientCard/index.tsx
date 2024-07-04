import styles from "./ingredientCard.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { removeIngredient } from "../../state/ingredients/ingredientsSlice";
import { removeSpice } from "../../state/spices/spicesSlice";

type IngredientCardProps = {
  ingredient: string;
  spice: boolean;
};

function IngredientCard({ ingredient, spice }: IngredientCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.container}>
      <p>{ingredient}</p>
      <button
        onClick={() =>
          dispatch(
            spice ? removeSpice(ingredient) : removeIngredient(ingredient)
          )
        }
      >
        Remove
      </button>
    </div>
  );
}

export default IngredientCard;
