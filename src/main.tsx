import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sucursal from './pages/Sucursal.tsx';
import Ventas from './pages/Ventas.tsx';
import './index.css';
import GetCode from './pages/GetCode.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/getcode',
		element: <GetCode />,
	},
	{
		path: '/ventas',
		element: <Ventas />,
	},
	{
		path: '/sucursal',
		element: <Sucursal />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
