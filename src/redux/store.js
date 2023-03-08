import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSclice';

export const store = configureStore({
  reducer: {
    filter,
  },
});
