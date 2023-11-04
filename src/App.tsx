import { ButtonMacro } from '@ui';
import { FormEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// type Inputs = {
// 	example: string;
// 	exampleRequired: string;
// };

function App() {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	watch,
	// 	formState: { errors },
	// } = useForm<Inputs>();
	// const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	// console.log(watch('example'));

	const [email, setEmail] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function onSubmitFunction(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setIsSubmitting(false);
	}
	return (
		<>
			<form
				onSubmit={onSubmitFunction}
				className="flex flex-col justify-evenly gap-2 rounded-sm border p-8"
			>
				<input
					type="text"
					maxLength={20}
					placeholder="Ingrese su nombre..."
					className="mt-1 block w-full rounded-md border-gray-300  text-macro-blue shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					maxLength={20}
					minLength={4}
					value={email}
					placeholder="Ingrese su email..."
					className="mt-1 block w-full rounded-md border-gray-300  text-macro-blue shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				<input
					type="password"
					placeholder="Contraseña..."
					required
					maxLength={20}
					className="mt-1 block w-full rounded-md border-gray-300  text-macro-blue shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
				/>
				<ButtonMacro type="submit" disabled={isSubmitting}>
					{' '}
					Submit{' '}
				</ButtonMacro>
			</form>
		</>
	);
}

export default App;
