import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  serverScore: number;
  receiverScore: number;
}

const initialState: CounterState = {
  serverScore: 0,
  receiverScore: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    serverScoreIncrement: (state) => {
      state.serverScore += 1;
    },
    serverScoreDecrement: (state) => {
      state.serverScore -= 1;
    },
    receiverScoreIncrement: (state) => {
      state.receiverScore += 1;
    },
    receiverScoreDecrement: (state) => {
      state.receiverScore -= 1;
    },
  },
});

export const {
  serverScoreIncrement,
  serverScoreDecrement,
  receiverScoreIncrement,
  receiverScoreDecrement,
} = counter.actions;
export default counter.reducer;
