import { useState } from 'react';
import './App.css';
import ButtonMacro from './ui/ButtonMacro';

function App() {
	const [count, set Count] = useState(0);

	return (
		<>
			<div className="flex justify-evenly border p-8 rounded-sm">
				<ButtonMacro onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</ButtonMacro>
				<ButtonMacro intent={'secondary'}>Secondary</ButtonMacro>
				<ButtonMacro intent={'danger'}>Danger</ButtonMacro>
			</div>
		</>
	);
}

export default App;
