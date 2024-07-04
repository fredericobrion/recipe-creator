import { useState } from "react";
import styles from "./ingredientsContainer.module.css";
import IngredientCard from "../ingredientCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addIngredient } from "../../state/ingredients/ingredientsSlice";
import { addSpice } from "../../state/spices/spicesSlice";

type IngredientsContainerProps = {
  spice: boolean;
};

function IngredientsContainer({ spice }: IngredientsContainerProps) {
  const dispatch = useDispatch<AppDispatch>();
  const ingredientsList = useSelector(
    (state: RootState) => state.ingredients.value
  );
  const spiceList = useSelector((state: RootState) => state.spices.value);

  const [ingredientOnInput, setIngredientOnInput] = useState("");

  const handleSubmitIngredient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ingredientAlreadyExists = ingredientsList.some(
      (ingredient) => ingredient === ingredientOnInput
    );
    if (ingredientAlreadyExists) {
      alert("Este ingrediente já foi adicionado.");
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
      alert("Este tempero já foi adicionado.");
      return;
    }
    dispatch(addSpice(ingredientOnInput));
    setIngredientOnInput("");
  };

  const listToUse = spice ? spiceList : ingredientsList;

  return (
    <>
      <div className={styles.container}>
        <h2>{spice ? "Temperos" : "Ingredientes"}</h2>
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
