import { createSlice } from '@reduxjs/toolkit'
import { getBrowserLang } from "@/utils/index";
import config from '@/config/index';
import { PayloadAction } from '@reduxjs/toolkit/react';
import { localeType } from '@/types';

const defaultBrowserLang = getBrowserLang();

let localeStorage = window.localStorage.getItem('locale') || '';
if (!localeStorage && !config.locale) {
  localeStorage = defaultBrowserLang || 'zh-CN'
}

export const localeStoreSlice = createSlice({
  name: 'localeStore',
  initialState: {
    value: localeStorage as localeType,
    list: [
      { value: 'zh-CN', label: '中文' },
      { value: 'en-US', label: 'English' },
    ]
  },
  reducers: {
    changeLocale: (state, action: PayloadAction<localeType>) => {
      state.value = action.payload
      window.localStorage.setItem('locale', action.payload)
    },
  },
});

export const { changeLocale } = localeStoreSlice.actions;

export default localeStoreSlice.reducer;

