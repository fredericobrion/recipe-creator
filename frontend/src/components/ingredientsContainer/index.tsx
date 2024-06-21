import { useState } from "react";
import styles from "./ingredientsContainer.module.css";
import IngredientCard from "../ingredientCard";
type IngredientsContainerProps = {
  spice: boolean;
}

function IngredientsContainer({spice}: IngredientsContainerProps) {
  const [ingredientOnInput, setIngredientOnInput] = useState("");
  const [ingredientsList, setIngredientsList] = useState<string[]>([]);

  const handleSubmitIngredient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ingredientAlreadyExists = ingredientsList.some(
      (ingredient) => ingredient === ingredientOnInput
    );
    if (ingredientAlreadyExists) {
      alert("Este ingrediente já foi adicionado.");
      return;
    }
    setIngredientsList([...ingredientsList, ingredientOnInput]);
    setIngredientOnInput("");
  };

  return (
    <>
      <div className={styles.container}>
        <h2>{spice ? 'Temperos' : 'Ingredientes'}</h2>
        <form onSubmit={(e) => handleSubmitIngredient(e)}>
          <input
            type="text"
            onChange={(e) => setIngredientOnInput(e.target.value)}
            value={ingredientOnInput}
            placeholder={`Digite um ${spice ? 'tempero' : 'ingrediente'} disponível`}
          />
        </form>
        <div>
          {ingredientsList.map((ingredient, index) => (
            <IngredientCard
              key={index}
              ingredient={ingredient}
              ingredientsList={ingredientsList}
              setIngredientsList={setIngredientsList}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default IngredientsContainer;
