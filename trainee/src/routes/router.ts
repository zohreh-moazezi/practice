import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '@features/login';
import Overview from '@features/overview';

const Router = createBrowserRouter([
  {
    path: '/',
    Component: Login,
  },
  {
    path: '/overview',
    Component: Overview,
  },
]);
export default Router;
