import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offset: 0,
  limit: 20,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setOffset: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.offset = action.payload;
    },
  },
});

export const { setOffset } = paginationSlice.actions;
export default paginationSlice.reducer;
