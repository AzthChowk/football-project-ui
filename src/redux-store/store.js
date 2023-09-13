import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./fixtureSlice";
import resultReducer from "./resultSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    result: resultReducer,
  },
});
