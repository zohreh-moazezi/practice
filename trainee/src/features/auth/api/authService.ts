import { axiosInstance } from '@utils/axiosInstance';
import { ILoginRequest, ILoginResponse } from '../types/auth.types';
import { setAccessToken, setRefreshToken } from '@utils/token';

export const authLoginPost = async (
  loginData: ILoginRequest
): Promise<ILoginResponse> => {
  console.log('authLoginPost function is called');
     
  try {
    const { data } = await axiosInstance.post<ILoginResponse>(
      'auth/login',
      loginData
    );
    console.log(data);
    
    const { access_token, refresh_token } = data;
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
    return data;
  } catch (err: any) {
    if (err.response) 
    {console.log('Error response:', err.response);

    throw err.response;}
    else {
      console.error('Unhandled error:', err);

      throw new Error('An error occurred while trying to login.');
    }
  }
};
