import { createSlice } from "@reduxjs/toolkit";

export const histogramsSlice = createSlice({
  name: "histograms",
  initialState: {
    data: null,
  },

  reducers: {
    responseData: (state, action) => {
      state.data = action.payload
    },
    clearData: (state) => {
      state.data = null;
    }
  }
});


export const {responseData, clearData} = histogramsSlice.actions;

export const selectData = (state) => state.data.data;

export default histogramsSlice.reducer;