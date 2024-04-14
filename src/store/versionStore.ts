import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/react';

export const versionStoreSlice = createSlice({
  name: 'userInfoStore',
  initialState: {
    dialogShow: false
  },
  reducers: {
    setDialogShow: (state, action: PayloadAction<boolean>) => {
      state.dialogShow = action.payload
    },
  },
});

export const { setDialogShow } = versionStoreSlice.actions;

export default versionStoreSlice.reducer;