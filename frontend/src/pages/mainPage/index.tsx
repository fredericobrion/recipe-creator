import CookingCardsContainer from "../../components/cookingCardsContainer";
import IngredientsContainer from "../../components/ingredientsContainer";
import styles from "./mainPage.module.css";

function MainPage() {
  return (
    <div>
      <CookingCardsContainer></CookingCardsContainer>
      <div className={styles.ingredientsContainer}>
        <IngredientsContainer spice={false}></IngredientsContainer>
        <IngredientsContainer spice={true}></IngredientsContainer>
      </div>
    </div>
  );
}

export default MainPage;
