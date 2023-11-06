import { ButtonMacro, InputEmail, InputNumber } from '@ui';

export default function Login() {
	return (
		<div className="flex h-screen flex-col flex-wrap content-center justify-center bg-white">
			<div className="flex w-full max-w-sm flex-col gap-4 px-6">
				<div>
					<label className="block" htmlFor="input-cuil">
						CUIT
					</label>
					<InputNumber id="input-cuil" className="w-full" />
				</div>
				<div>
					<label className="block" htmlFor="input-email">
						EMAIL
					</label>
					<InputEmail id="input-email" className="w-full"/>
				</div>
			</div>
			<div>
				<ButtonMacro>Solicitar</ButtonMacro>
			</div>
		</div>
	);
}
