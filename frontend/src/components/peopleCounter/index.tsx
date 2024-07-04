import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addPerson, removePerson } from "../../state/people/peopleSlice";

function PeopleCounter () {
  const dispatch = useDispatch<AppDispatch>();
  const people = useSelector((state: RootState) => state.people.value);

  return (
    <div>
      <button onClick={() => dispatch(removePerson())}>-</button>
      <span>{people}</span>
      <button onClick={() => dispatch(addPerson())}>+</button>
    </div>
  )
}

export default PeopleCounter;