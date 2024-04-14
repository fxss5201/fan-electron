import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/react';

export const versionStoreSlice = createSlice({
  name: 'userInfoStore',
  initialState: {
    value: window.versions.app
  },
  reducers: {
    setVersion: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
});

export const { setVersion } = versionStoreSlice.actions;

export default versionStoreSlice.reducer;