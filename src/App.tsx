// import { QueryClient } from '@tanstack/react-query';
import Login from './pages/Login';
import { Header } from '@components';
// import { Menu } from '@headlessui/react';
// const client = new QueryClient();

function App() {
	return (
		<div className='h-screen'>
			<Header />
			<Login />
		</div>
	);
}

export default App;
