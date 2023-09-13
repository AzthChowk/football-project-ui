import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "result",
  initialState: {
    value: 500,
    isMatchFinished: false,
    matchNumber: "",
    opponentOne: "",
    opponentTwo: "",
    opponentOneGoalScore: 0,
    opponentTwoGoalScore: 0,
    winnerId: "",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = resultSlice.actions;
export default resultSlice.reducer;
