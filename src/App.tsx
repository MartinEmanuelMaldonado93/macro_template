import { ButtonMacro } from '@ui';
import { useForm, SubmitHandler } from 'react-hook-form';

type MyInputs = {
	email: string;
	passwordRequired: string;
};

function App() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<MyInputs>();

	const onSubmit: SubmitHandler<MyInputs> = (data) => console.log(data);

	console.log(watch('email'));

	return (
		<div className="flex min-h-screen flex-col flex-wrap content-center justify-center">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex w-full max-w-sm flex-col justify-evenly gap-8 rounded-sm p-8 shadow-lg"
			>
				<input
					{...register('email')}
					type="text"
					maxLength={20}
					placeholder="Ingrese su nombre..."
					className="mt-1 block w-full rounded-md border-gray-300  text-macro-blue shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				<input
					type="email"
					maxLength={20}
					minLength={4}
					placeholder="Ingrese su email..."
					className="mt-1 block w-full rounded-md border-gray-300  text-macro-blue shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				<input
					{...register('passwordRequired', {
						required: { value: true, message: '*This field is required' },
						minLength: 4,
						maxLength: {
							value: 20,
							message: 'Password must to have at least 20 characters',
						},
					})}
					type="password"
					placeholder="Contraseña..."
					className="mt-1 block w-full rounded-md border-gray-300  text-macro-blue shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
				/>
				{errors.passwordRequired && (
					<span className="italic text-red-500">
						{errors.passwordRequired.message}
					</span>
				)}
				<ButtonMacro type="submit"> Submit </ButtonMacro>
			</form>
		</div>
	);
}

export default App;
