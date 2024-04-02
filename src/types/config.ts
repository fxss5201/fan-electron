import type { UserInfoType, UserInfoCanWatermarkType } from './userInfo'

export interface WatermarkFun {
  (userInfo: UserInfoType): string[];
}

export interface WatermarkObject {
  user: (keyof UserInfoCanWatermarkType)[]
}

export interface WatermarkType {
  watermark?: string[] | WatermarkObject | WatermarkFun
}

export interface Config extends WatermarkType {
  title: string;
  logo: string;

  locale: string;
  isShowToggleLang: boolean;
  noAccessPath: string;
}
