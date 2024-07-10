import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addPerson, removePerson } from "../../state/people/peopleSlice";
import styles from "./peopleCounter.module.css";
import classNames from "classnames";

function PeopleCounter() {
  const dispatch = useDispatch<AppDispatch>();
  const people = useSelector((state: RootState) => state.people.value);

  const darkTheme = useSelector((state: RootState) => state.theme.dark);

  return (
    <div className={styles.container}>
      <h3
        className={classNames(styles.people, {
          [styles.people__light]: !darkTheme,
        })}
      >
        Quantidade de pessoas
      </h3>
      <div>
        <button
          className={styles.decrease}
          onClick={() => dispatch(removePerson())}
        >
          -
        </button>
        <span
          className={classNames(styles.counter, {
            [styles.counter__light]: !darkTheme,
          })}
        >
          {people}
        </span>
        <button
          className={styles.increase}
          onClick={() => dispatch(addPerson())}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default PeopleCounter;
