import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    serverScoreIncrement: (state: CounterState) => {
      state.serverScore += 1;
    },
    serverScoreDecrement: (state: CounterState) => {
      state.serverScore -= 1;
    },
    receiverScoreIncrement: (state: CounterState) => {
      state.receiverScore += 1;
    },
    receiverScoreDecrement: (state: CounterState) => {
      state.receiverScore -= 1;
    },
    serverScoreByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.serverScore = action.payload
    },
    receiverScoreByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.receiverScore = action.payload
    }
  },
});

export const {
  serverScoreIncrement,
  serverScoreDecrement,
  receiverScoreIncrement,
  receiverScoreDecrement,
} = counter.actions;
export default counter.reducer;
