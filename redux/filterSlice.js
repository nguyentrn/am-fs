import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "popular",
  filterQuery: "",
  brands: [],
  rams: [],
  storages: [],
};

// Reducers
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setBrandFilter: (state, action) => {
      state.brands = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    setRamFilter: (state, action) => {
      state.rams = action.payload;
    },
    setStorageFilter: (state, action) => {
      state.storages = action.payload;
    },
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
  },
});

export const {
  triggerFetchData,
  setSortBy,
  setBrandFilter,
  setPriceFilter,
  setRamFilter,
  setStorageFilter,
  setFilterQuery,
} = filterSlice.actions;

// Actions
export const updateFilterQuery = () => (dispatch, getState) => {
  const { filter } = getState();
  const query = {};
  if (filter.brands.length) {
    query.brands = filter.brands;
  }
  if (filter.rams.length) {
    query.rams = filter.rams;
  }
  if (filter.storages.length) {
    query.storages = filter.storages;
  }

  if (filter.minPrice) {
    query.minPrice = filter.minPrice;
  }
  if (filter.maxPrice) {
    query.maxPrice = filter.maxPrice;
  }

  if (filter.sortBy === "popular") {
    query.sortBy = "trend";
    query.isDesc = 1;
  } else if (filter.sortBy === "new_release") {
    query.sortBy = "released_at";
    query.isDesc = 1;
  } else if (filter.sortBy === "price_asc") {
    query.sortBy = "min_price";
    query.isDesc = 0;
  }
  // console.log(query);
  dispatch(setFilterQuery(query));
};

// Selectors
export const selectFilter = (state) => state.filter;
export const selectSortBy = (state) => state.filter.sortBy;
export const selectFilterQuery = (state) => state.filter.filterQuery;

export default filterSlice.reducer;
