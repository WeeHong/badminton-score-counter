import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/score";
import serveReducer from "./feature/serve";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    serve: serveReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
