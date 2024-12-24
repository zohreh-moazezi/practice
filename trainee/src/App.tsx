import React from 'react';
import { theme } from './theme/theme';
import { useStyles } from './theme/Global';
import { ThemeProvider } from 'react-jss';
import { RouterProvider } from 'react-router-dom';
import Router from 'routes/router';

const App = () => {
  useStyles();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router}/>
        <div></div>
    </ThemeProvider>
  );
};

export default App;
