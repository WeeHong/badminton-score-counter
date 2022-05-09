import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ServeState {
  serveTeam: number;
  serverPosition: number;
  receiverPosition: number;
}

const initialState: ServeState = {
  serveTeam: 0,
  serverPosition: 0,
  receiverPosition: 0,
};

export const team = createSlice({
  name: "team",
  initialState,
  reducers: {
    setServeTeam: (state: ServeState, action: PayloadAction<number>) => {
      state.serveTeam = action.payload;
    },
    setServerPosition: (state: ServeState, action: PayloadAction<number>) => {
      if (state.serveTeam !== 2) {
        state.serverPosition = (action.payload ^ 2) % 2;
        state.receiverPosition = (action.payload ^ 2) % 2 === 0 ? 0 : 1;
      }
    },
    setReceiverPosition: (state: ServeState, action: PayloadAction<number>) => {
      if (state.serveTeam !== 1) {
        console.log("Receiver Score: ", (action.payload ^ 2) % 2);

        state.receiverPosition = (action.payload ^ 2) % 2;
        state.serverPosition = (action.payload ^ 2) % 2 === 0 ? 0 : 1;
      }
    },
  },
});

export const { setServeTeam, setServerPosition, setReceiverPosition } =
  team.actions;

export default team.reducer;
