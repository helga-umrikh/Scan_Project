import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import histogramsSlice from '../features/histogramsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    histograms: histogramsSlice
  },
  devTools: true
})