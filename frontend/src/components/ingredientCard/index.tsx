import styles from "./ingredientCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { removeIngredient } from "../../state/ingredients/ingredientsSlice";
import { removeSpice } from "../../state/spices/spicesSlice";
import { useState } from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import classNames from "classnames";

type IngredientCardProps = {
  ingredient: string;
  spice: boolean;
};

function IngredientCard({ ingredient, spice }: IngredientCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const darkTheme = useSelector((state: RootState) => state.theme.dark);

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
      <p className={classNames(styles.item, {[styles.item__light]: !darkTheme})}>- {capitalizeFirstLetter(ingredient)}</p>
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
