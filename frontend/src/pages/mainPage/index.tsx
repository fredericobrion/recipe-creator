import CookingCardsContainer from "../../components/cookingCardsContainer";
import IngredientsContainer from "../../components/ingredientsContainer";
import styles from "./mainPage.module.css";
import PeopleCounter from "../../components/peopleCounter";

function MainPage() {
  return (
    <div>
      <CookingCardsContainer></CookingCardsContainer>
      <PeopleCounter></PeopleCounter>
      <div className={styles.ingredientsContainer}>
        <IngredientsContainer spice={false}></IngredientsContainer>
        <IngredientsContainer spice={true}></IngredientsContainer>
      </div>
    </div>
  );
}

export default MainPage;
