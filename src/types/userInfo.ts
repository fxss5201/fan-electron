export interface UserInfoCanWatermarkType {
  name: string;
}

export interface UserInfoType extends UserInfoCanWatermarkType {
  header: string;
  access: string[];
}
