import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonMacro, InputMacro } from '@ui';
import { SignupSchemaType, signUpSchema } from '@zodSchemas';

export default function Form() {
	const {
		register,
		handleSubmit,
		reset,
		// watch,
		// setError, // if server give us an error
		formState: { errors },
	} = useForm<SignupSchemaType>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit: SubmitHandler<SignupSchemaType> = (data) => {
		console.log(data);
		// POST ....
		reset();
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex w-full max-w-sm flex-col justify-evenly gap-8 rounded-sm p-8 shadow-lg"
		>
			<InputMacro
				{...register('email')}
				type="text"
				maxLength={20}
				placeholder="Ingrese su nombre..."
				className="text-macro-blue mt-1 block w-full rounded-md  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			/>
			<InputMacro
				type="email"
				maxLength={20}
				minLength={4}
				placeholder="Ingrese su email..."
				className="text-macro-blue mt-1 block w-full rounded-md  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			/>
			<InputMacro
				{...register('password', {
					required: { value: true, message: '*This field is required' },
					minLength: 4,
					maxLength: {
						value: 20,
						message: 'Password must to have at least 20 characters',
					},
				})}
				type="password"
				placeholder="Contraseña..."
				className="text-macro-blue mt-1 block w-full rounded-md  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
			/>
			{errors.password && (
				<span className="italic text-red-500">{errors.password.message}</span>
			)}
			{/* conditionally paint the btn */}
			<ButtonMacro type="submit">Submit</ButtonMacro>
		</form>
	);
}
