import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  storages: [],
  rams: [],
};

// Reducers
export const metaSlice = createSlice({
  name: "meta",
  initialState,
  reducers: {
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setPrice: (state, action) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    setRams: (state, action) => {
      if (action.payload) {
        state.rams = action.payload;
      }
    },
    setStorages: (state, action) => {
      if (action.payload) {
        state.storages = action.payload;
      }
    },
  },
});

export const { setBrands, setPrice, setRams, setStorages } = metaSlice.actions;

// Actions

// Selectors
export const selectBrands = (state) => state.meta.brands;
export const selectPrice = (state) => ({
  min: state.meta.minPrice,
  max: state.meta.maxPrice,
});
export const selectRams = createSelector(
  (state) => state.meta.rams,
  (rams) => rams.map((id) => ({ id, name: id + "GB" }))
);
export const selectStorages = createSelector(
  (state) => state.meta.storages,
  (storages) => storages.map((id) => ({ id, name: id + "GB" }))
);

export default metaSlice.reducer;
