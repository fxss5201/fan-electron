export interface UserInfoNoAccessType {
  name: string;
  header: string;
}

export interface UserInfoType extends UserInfoNoAccessType {
  access: string[];
}
