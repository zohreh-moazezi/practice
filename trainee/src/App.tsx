import React from 'react';
import { theme } from './theme/theme';
import { useStyles } from './theme/Global';
import { ThemeProvider } from 'react-jss';

const App = () => {
  useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
};

export default App;
