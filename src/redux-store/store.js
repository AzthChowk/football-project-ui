import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./fixtureSlice";
import resultReducer from "./resultSlice";
import snackbarReducer from "./snackbarSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    result: resultReducer,
    snackbar: snackbarReducer,
  },
});
