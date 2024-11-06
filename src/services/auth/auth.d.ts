export type IToken = {
  accessToken?: string;
  refreshToken?: string;
} | null;

export type TLogin = {
  username: string;
  password: string;
};

export interface IUserInfo {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface IUser extends IUserInfo {
  accessToken: string; // JWT accessToken (for backward compatibility) in response and cookies
  refreshToken: string; // refreshToken in response and cookies
}
