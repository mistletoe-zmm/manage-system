// 用户信息
export interface UserInfo {
  id: string;
  userCode: string;
  userName: string;
  userPhone?: number;
  age?: number;
  address?: string;
  email?: string;
}

export interface Menu {
  id: string;
}
