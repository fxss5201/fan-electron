import type { UserInfoType } from './userInfo'

export interface WatermarkFun {
  (userInfo: UserInfoType): string[];
}

export interface WatermarkObject {
  user: (keyof UserInfoType)[]
}

export interface WatermarkType {
  watermark?: string[] | WatermarkObject | WatermarkFun
}

export interface Config extends WatermarkType {
  locale: string;
  isShowToggleLang: boolean;
  noAccessPath: string;
}
