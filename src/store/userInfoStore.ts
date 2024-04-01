import { UserInfoType } from '@/types/userInfo';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/react';

export const userInfoStoreSlice = createSlice({
  name: 'userInfoStore',
  initialState: {
    value: {
      name: '',
      header: '',
      access: []
    } as UserInfoType
  },
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfoType>) => {
      state.value = action.payload
    },
  },
});

export const { setUserInfo } = userInfoStoreSlice.actions;

export default userInfoStoreSlice.reducer;