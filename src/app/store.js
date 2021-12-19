import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../container/Client/MovieDetail/module/movieSlice';
import seatReducer from '../container/Client/SeatPlan/module/seatSlice';

export const store = configureStore({
  reducer: {
    movieDetail: movieReducer,
    seatPlan: seatReducer
  },
});
