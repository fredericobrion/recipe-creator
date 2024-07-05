import CookingCardsContainer from "../../components/cookingCardsContainer";
import IngredientsContainer from "../../components/ingredientsContainer";
import styles from "./mainPage.module.css";
import PeopleCounter from "../../components/peopleCounter";
import GenerateRecipeButton from "../../components/generateButton";

function MainPage() {
  return (
    <div>
      <CookingCardsContainer></CookingCardsContainer>
      <PeopleCounter></PeopleCounter>
      <div className={styles.ingredientsContainer}>
        <IngredientsContainer spice={false}></IngredientsContainer>
        <IngredientsContainer spice={true}></IngredientsContainer>
      </div>
      <GenerateRecipeButton/>
    </div>
  );
}

export default MainPage;
