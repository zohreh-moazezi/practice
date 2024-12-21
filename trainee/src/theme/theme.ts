export type themeType = {
  colors: {
    primary: string;
    textPrimary: string;
    textSecondary: string;
    error: string;
    buttonBackground: string;
    shadowPrimary: string;
    shadowSecondary: string;
    shadowTartiary: string;
    border: string;
    input: string;
    errorText: string;
  };
  fonts: {
    main: string;
  };
};

export const theme = {
  colors: {
    primary: 'white',
    textPrimary: '#000000de',
    textSecondary: '#00000099',
    error: '#ff4d4f',
    buttonBackground: '#2196f3',
    shadowPrimary: '#00000033',
    shadowSecondary: '#00000024',
    shadowTartiary: '#0000001f',
    border: '#0000003b',
    input: '#000',
    errorText: '#d32f2f',
  },
  fonts: {
    main: 'Roboto',
  },
};
