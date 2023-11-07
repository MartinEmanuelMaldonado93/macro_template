import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@constans';
import { Sucursal, Ventas, GetCode, NotFound404 } from '@pages';
import './index.css';

const router = createBrowserRouter([
	{
		path: PUBLIC_ROUTES.HOME,
		element: <App />,
		errorElement: <NotFound404 />,
	},
	{
		path: PRIVATE_ROUTES.GET_CODE,
		element: <GetCode />,
	},
	{
		path: PRIVATE_ROUTES.VENTAS,
		element: <Ventas />,
	},
	{
		path: PRIVATE_ROUTES.SUCURSAL,
		element: <Sucursal />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
