import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import histogramsSlice from '../features/histogramsSlice'; 
import cardsDataSlice from '../features/cardsDataSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    histograms: histogramsSlice,
    cards: cardsDataSlice
  },
  devTools: true
})