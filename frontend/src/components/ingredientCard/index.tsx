import styles from './ingredientCard.module.css';

type IngredientCardProps = {
  ingredient: string;
  ingredientsList: string[];
  setIngredientsList: (newIngredientsList: string[]) => void;
};

function IngredientCard({
  ingredient,
  ingredientsList,
  setIngredientsList,
}: IngredientCardProps) {
  return (
    <div className={styles.container}>
      <p>{ingredient}</p>
      <button
        onClick={() => {
          const newIngredientsList = ingredientsList.filter(
            (item) => item !== ingredient
          );
          setIngredientsList(newIngredientsList);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default IngredientCard;
