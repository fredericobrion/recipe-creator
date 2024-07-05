import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ErrorState {
  value: string;
}

const initialState: ErrorState = {
  value: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { addError } = errorSlice.actions;

export default errorSlice.reducer;