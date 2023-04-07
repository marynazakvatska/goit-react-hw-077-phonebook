import { createSlice } from "@reduxjs/toolkit";


const filterInitialState = "";


const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
     return state = action.payload;
    },
  },
});

export const {changeFilter} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;


