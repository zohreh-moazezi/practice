import React from 'react';
import { theme } from './theme/theme';
import { useStyles } from './theme/Global';
import { ThemeProvider } from 'react-jss';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import Router from 'routes/router';

const queryClient=new QueryClient();
const App = () => {
  useStyles();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={Router}/>
      </QueryClientProvider>
     
        
    </ThemeProvider>
  );
};

export default App;
