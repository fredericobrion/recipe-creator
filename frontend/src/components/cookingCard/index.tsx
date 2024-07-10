import styles from "./cookingCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import {
  addCookingMethod,
  removeCookingMethod,
} from "../../state/cookingMethods/cookingMethodsSlice";
import { CookingMethods } from "../../types/cookingMethods";
import classNames from "classnames";

type CookingCardProps = {
  image: string;
  method: CookingMethods;
};

function CookingCard({ image, method }: CookingCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const cookingMethods = useSelector(
    (state: RootState) => state.cookingMethods.value
  );

  const darkTheme = useSelector((state: RootState) => state.theme.dark);

  const handleCookingMethod = (cookingMethod: CookingMethods) => {
    if (cookingMethods.includes(cookingMethod)) {
      dispatch(removeCookingMethod(cookingMethod));
    } else {
      dispatch(addCookingMethod(cookingMethod));
    }
  };

  const methodSelected = cookingMethods.includes(method);

  return (
    <div
      className={classNames(styles.container, {
        [styles.selected]: methodSelected,
        [styles.container__light]: !darkTheme,
      })}
      onClick={() => handleCookingMethod(method)}
    >
      <img src={image} alt={method} />
      <p className={classNames(styles.p, { [styles.p__light]: !darkTheme })}>
        {method}
      </p>
    </div>
  );
}

export default CookingCard;
