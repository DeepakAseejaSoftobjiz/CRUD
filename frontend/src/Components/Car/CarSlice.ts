import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import axios from 'axios';

interface ICar {
  id?: string;
  title?: string;
  price?: number;
  description?: string;
}

export interface CarState {
  product: [ICar];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CarState = {
  product: [{}],
  status: 'idle',
};

export const CarSlice = createSlice({
  name: 'Car',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getCar: (state: any, action: PayloadAction<number>) => {
      state.Car = action.payload;
    },
  },
});

export const getCarAsync = (): AppThunk => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3000/car')
  dispatch(getCar(data));
};

export const AddCarAsync = (Car: ICar): AppThunk => async (dispatch) => {
  await axios.post('http://localhost:3000/car', Car)
  dispatch(getCarAsync());
};

export const DeleteCarAsync = (carId: any): AppThunk => async () => {
  await axios.delete(`http://localhost:3000/car/${carId}`);
};


export const { getCar } = CarSlice.actions;
export default CarSlice.reducer;
