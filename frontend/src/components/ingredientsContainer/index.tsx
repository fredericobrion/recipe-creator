import { useState } from "react";
import styles from "./ingredientsContainer.module.css";
import IngredientCard from "../ingredientCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addIngredient } from "../../state/ingredients/ingredientsSlice";
import { addSpice } from "../../state/spices/spicesSlice";
import Swal from 'sweetalert2';
import classNames from "classnames";

type IngredientsContainerProps = {
  spice: boolean;
};

function IngredientsContainer({ spice }: IngredientsContainerProps) {
  const dispatch = useDispatch<AppDispatch>();
  const ingredientsList = useSelector(
    (state: RootState) => state.ingredients.value
  );
  const spiceList = useSelector((state: RootState) => state.spices.value);

  const darkTheme = useSelector((state: RootState) => state.theme.dark);

  const [ingredientOnInput, setIngredientOnInput] = useState("");

  const handleSubmitIngredient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ingredientOnInput) return;
    const ingredientAlreadyExists = ingredientsList.some(
      (ingredient) =>
        ingredient.toLowerCase() === ingredientOnInput.toLowerCase()
    );
    if (ingredientAlreadyExists) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Este ingrediente já foi adicionado!',
        background: '#363535',
        color: '#e5e5e5'
      })
      return;
    }
    dispatch(addIngredient(ingredientOnInput));
    setIngredientOnInput("");
  };

  const handleSubmitSpice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const spiceAlreadyExists = spiceList.some(
      (spice) => spice === ingredientOnInput
    );
    if (spiceAlreadyExists) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Este tempero já foi adicionado!',
        background: '#363535',
        color: '#e5e5e5'
      })
      return;
    }
    dispatch(addSpice(ingredientOnInput));
    setIngredientOnInput("");
  };

  const listToUse = spice ? spiceList : ingredientsList;

  return (
    <>
      <div className={classNames(styles.container, {[styles.container__light]: !darkTheme})}>
        <h2 className={classNames(styles.type, {[styles.type__light]: !darkTheme})}>{spice ? "Temperos" : "Ingredientes"}</h2>
        <form
          onSubmit={(e) =>
            spice ? handleSubmitSpice(e) : handleSubmitIngredient(e)
          }
        >
          <input
            type="text"
            onChange={(e) => setIngredientOnInput(e.target.value)}
            value={ingredientOnInput}
            placeholder={`Digite um ${
              spice ? "tempero" : "ingrediente"
            } disponível`}
          />
        </form>
        <div>
          {listToUse.map((ingredient, index) => (
            <IngredientCard key={index} ingredient={ingredient} spice={spice} />
          ))}
        </div>
      </div>
    </>
  );
}

export default IngredientsContainer;
