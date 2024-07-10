import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

let router = createBrowserRouter(routes);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
