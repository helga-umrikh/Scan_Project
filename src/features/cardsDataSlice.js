import { CreateSlice } from "@reduxjs/toolkit";

export const cardsDataSlice = createSlice({
  name: "cardsData",
  initialState: {
    cards: null,
  },

  reducers: {
    responseCardData: (state, action) => {
      state.cards = action.payload;
    },
    clearCardsData: (state) => {
      state.cards = null;
    }
  }
});


export const {responseCardData, clearCardsData} = cardsDataSlice.actions;

export const selectData = (state) => state.cardsData.cards;

export default cardsDataSlice.reducer;
