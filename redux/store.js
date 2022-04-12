import { configureStore } from "@reduxjs/toolkit";

import metaSlice from "./metaSlice";
import filterSlice from "./filterSlice";

export default configureStore({
  reducer: {
    meta: metaSlice,
    filter: filterSlice,
  },
});
