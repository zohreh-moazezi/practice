import { axiosInstance } from '@utils/axiosInstance';
import { ILoginRequest, ILoginResponse } from '../types/auth.types';
import { setAccessToken, setRefreshToken } from '@utils/token';

export const authLoginPost = async (
  loginData: ILoginRequest
): Promise<ILoginResponse> => {
  try {
    const { data } = await axiosInstance.post<ILoginResponse>(
      'auth/login',
      loginData
    );
    const { access_token, refresh_token } = data;
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
    return data;
  } catch (err: any) {
    if (err.response) throw err.response;
    else {
      throw new Error('An error occurred while trying to login.');
    }
  }
};
