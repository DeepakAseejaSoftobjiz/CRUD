import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CarReducer from '../Components/Car/CarSlice';

export const store = configureStore({
  reducer: {
    Car: CarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
