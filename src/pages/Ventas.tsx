import {
	ButtonMacro,
	CenterLayout,
	InputMacro,
	InputMacroRenderProps,
} from '@ui';

export default function Ventas() {
	return (
		<CenterLayout>
			<div
				id="razon-social"
				className="m-4 grid grid-cols-2 gap-4 rounded-lg border p-4"
			>
				<InputMacro placeholder="Razon social" />
				<InputMacro placeholder="actividad" />
				<InputMacro placeholder="ventas netas (12 meses)" />
				<InputMacro placeholder="nombre de fantasia" />
				{/* <InputMacro type="checkbox" /> */}
				<InputMacroRenderProps
					id="render-props"
					placeholder="render props element"
					renderLabel={() => (
						<label htmlFor="render-props">render props vo</label>
					)}
				/>
			</div>
			<div
				id="responsable-legal"
				className="m-4 grid grid-cols-2 gap-4 rounded-lg border p-4"
			>
				<InputMacro placeholder="nombre" />
				<InputMacro placeholder="apellido" />
				<InputMacro placeholder="tipo documento" />
				<InputMacro placeholder="nro documento" />
				<InputMacro placeholder="% participacion" />
			</div>
			<div className="flex justify-center">
				<ButtonMacro>Avanzar</ButtonMacro>
			</div>
		</CenterLayout>
	);
}
