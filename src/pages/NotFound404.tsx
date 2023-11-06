import { useRouteError } from 'react-router-dom';
import { useFadeInText } from '../utils/motion-utils';

export default function NotFound404() {
	const error = useRouteError() as Error & { statusText: string };
	useFadeInText('.motion-el');

	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="motion-el font-titillium text-2xl font-bold">
				Oops! NotFound404
			</h1>
			<p className="motion-el ">Sorry, an unexpected error has occurred.</p>
			<p className="motion-el text-gray-600">
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
