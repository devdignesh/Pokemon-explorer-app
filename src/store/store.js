import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slice/paginationSlice';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});
