import { configureStore } from "@reduxjs/toolkit";

import componentsReducer from "./features/componentsSlice";

export default configureStore({
  reducer: {
    formData: componentsReducer,
  },
});
