import styles from "./generateButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addRecipe } from '../../state/recipe/recipeSlice';
import { setLoading } from "../../state/loading/loadingSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import classNames from "classnames";

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

  const darkTheme = useSelector((state: RootState) => state.theme.dark);

  const confirmIngredients = ingredients.length > 0;
  const confirmSpices = spices.length > 0;
  const confirmCookingMethods = cookingMethods.length > 0;

  const handleCreateRecipe = async () => {
    if (!confirmCookingMethods) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Selecione pelo menos um método de cozimento',
        background: '#363535',
        color: '#e5e5e5'
      })
      return;
    }

    if (!confirmIngredients) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite pelo menos um ingrediente',
        background: '#363535',
        color: '#e5e5e5'
      })
      return;
    }

    if (!confirmSpices) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite pelo menos um tempero',
        background: '#363535',
        color: '#e5e5e5'
      })
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
      setTimeout(() => dispatch(setLoading(false)), 1000);
    } catch (error) {
      navigate("/");
      dispatch(setLoading(false));
      console.log(error);
    }
  };

  return (
    <button className={classNames(styles.button, {[styles.button__light]: !darkTheme})} onClick={() => handleCreateRecipe()}>
      Gerar receita
    </button>
  );
}

export default GenerateRecipeButton;
