import { InputMacro } from "@ui";

export default function GetCode() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-6">
			<div className="text-lg">Ingrese el código de verificación</div>
			<div className="flex ">
				<InputMacro className="w-16 border-t-0 border-l-0 border-r-0 inline"/>		
				<InputMacro className="w-16 border-t-0 border-l-0 border-r-0 inline"/>		
				<InputMacro className="w-16 border-t-0 border-l-0 border-r-0 inline"/>		
				<InputMacro className="w-16 border-t-0 border-l-0 border-r-0 inline"/>		
			</div>
		</div>
	);
}
