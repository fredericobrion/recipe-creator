import { createSlice } from "@reduxjs/toolkit";

interface PeopleState {
  value: number;
}

const initialState: PeopleState = {
  value: 1,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPerson: (state) => {
      state.value += 1;
    },
    removePerson: (state) => {
      if (state.value > 1) state.value -= 1;
    },
  },
});

export const { addPerson, removePerson } = peopleSlice.actions;

export default peopleSlice.reducer;
