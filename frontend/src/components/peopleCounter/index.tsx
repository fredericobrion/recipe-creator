import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addPerson, removePerson } from "../../state/people/peopleSlice";
import styles from './peopleCounter.module.css';

function PeopleCounter() {
  const dispatch = useDispatch<AppDispatch>();
  const people = useSelector((state: RootState) => state.people.value);

  return (
    <div className={styles.container}>
      <h3>Quantidade de pessoas</h3>
      <div>
        <button className={styles.decrease} onClick={() => dispatch(removePerson())}>-</button>
        <span>{people}</span>
        <button className={styles.increase} onClick={() => dispatch(addPerson())}>+</button>
      </div>
    </div>
  );
}

export default PeopleCounter;
