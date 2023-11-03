import { ButtonMacro } from '@ui';
import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex justify-evenly rounded-sm border p-8">
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
