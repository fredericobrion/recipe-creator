import styles from "./generateButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addRecipe } from '../../state/recipe/recipeSlice';
import { setLoading } from "../../state/loading/loadingSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GenerateRecipeButton() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const cookingMethods = useSelector(
    (state: RootState) => state.cookingMethods.value
  );
  const people = useSelector((state: RootState) => state.people.value);
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.value
  );
  const spices = useSelector((state: RootState) => state.spices.value);

  const confirmIngredients = ingredients.length > 0;
  const confirmSpices = spices.length > 0;
  const confirmCookingMethods = cookingMethods.length > 0;

  const handleCreateRecipe = async () => {
    if (!confirmCookingMethods) {
      alert("Selecione pelo menos um método de cozimento");
      return;
    }

    if (!confirmIngredients) {
      alert("Digite pelo menos um ingrediente");
      return;
    }

    if (!confirmSpices) {
      alert("Digite pelo menos um tempero");
      return;
    }

    const data = {
      ingredients,
      spices,
      cookingMethods,
      people,
    };

    try {
      dispatch(setLoading(true));
      navigate("/creating");
      const response = await axios.post('http://localhost:3000/recipe', data);
      dispatch(addRecipe(response.data.message));
      navigate("/recipe");
    } catch (error) {
      navigate("/");
      console.log(error);
    }
  };

  return (
    <button className={styles.button} onClick={() => handleCreateRecipe()}>
      Gerar receita
    </button>
  );
}

export default GenerateRecipeButton;
