import { createSlice } from '@reduxjs/toolkit'
import i18n from '@/i18n';
import { getBrowserLang } from "@/utils/index";
import config from '@/config/index';
import { PayloadAction } from '@reduxjs/toolkit/react';

const defaultBrowserLang = getBrowserLang();

// 设置过本地的则使用本地的
let localeStorage = window.localStorage.getItem('locale') || '';
if (localeStorage) {
  if (localeStorage !== config.locale) {
    i18n.changeLanguage(localeStorage)
  }
} else {
  // 未设置本地的，则优先使用 config.locale ，否则从浏览器获取到的语言 navigator.language || navigator.browserLanguage
  if (!config.locale && config.isShowToggleLang) {
    localeStorage = defaultBrowserLang
    i18n.changeLanguage(localeStorage)
  } else {
    localeStorage = config.locale || 'zhCN'
  }
}

export const localeStoreSlice = createSlice({
  name: 'localeStore',
  initialState: {
    value: localeStorage,
    list: [
      { value: 'zhCN', label: '中文' },
      { value: 'enGb', label: 'English' },
    ]
  },
  reducers: {
    changeLocale: (state, action: PayloadAction<string>) => {
      i18n.changeLanguage(action.payload)
      state.value = action.payload
      window.localStorage.setItem('locale', action.payload)
    },
  },
});

export const { changeLocale } = localeStoreSlice.actions;

export default localeStoreSlice.reducer;

