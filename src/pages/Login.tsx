import { ButtonMacro, InputMacro } from '@ui';
import { useFadeInText } from '@utils';

export default function Login() {
	useFadeInText('.label');

	return (
		<form className="flex h-screen flex-col flex-wrap content-center justify-center gap-6 bg-white">
			<div className="flex w-full max-w-sm flex-col gap-4 px-6">
				<div>
					<label className="label block" htmlFor="input-cuil">
						CUIT
					</label>
					<InputMacro
						id="input-cuil"
						className="w-full"
						pattern="/^\d{2}\-\d{8}\-\d{1}$/"
					/>
				</div>
				<div>
					<label className="label block" htmlFor="input-email">
						EMAIL
					</label>
					<InputMacro id="input-email" className="w-full" />
				</div>
			</div>
			<div className="flex w-full justify-center">
				<ButtonMacro type={'submit'}>Solicitar</ButtonMacro>
			</div>
		</form>
	);
}
