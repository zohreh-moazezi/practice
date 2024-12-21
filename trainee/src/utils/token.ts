export const setAccessToken = (access_token: string): void =>
  localStorage.setItem('access_token', access_token);

export const getAccessToken = (): string | null => {
  return localStorage.getItem('access_token');
};

export const setRefreshToken = (refresh_token: string): void =>
  localStorage.setItem('refresh_token', refresh_token);
