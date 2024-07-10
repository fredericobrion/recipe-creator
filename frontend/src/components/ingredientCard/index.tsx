import styles from "./ingredientCard.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { removeIngredient } from "../../state/ingredients/ingredientsSlice";
import { removeSpice } from "../../state/spices/spicesSlice";
import { useState } from "react";

type IngredientCardProps = {
  ingredient: string;
  spice: boolean;
};

function IngredientCard({ ingredient, spice }: IngredientCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    setTimeout(() => {
      dispatch(spice ? removeSpice(ingredient) : removeIngredient(ingredient));
      setIsDeleting(false);
    }, 3200);
  };

  return (
    <div className={styles.container}>
      <p>- {ingredient}</p>
      <button
        className={`${styles.button} ${isDeleting ? styles.delete : ""}`}
        onClick={handleClick}
        disabled={isDeleting}
      >
        <div className={styles.trash}>
          <div className={styles.top}>
            <div className={styles.paper}></div>
          </div>
          <div className={styles.box}></div>
          <div className={styles.check}>
            <svg viewBox="0 0 8 6">
              <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
            </svg>
          </div>
        </div>
        <span>Remover</span>
      </button>
    </div>
  );
}

export default IngredientCard;
