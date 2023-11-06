import { animate } from 'motion';
import { useLayoutEffect } from 'react';

export function useFadeInText(querySelector: string) {
	useLayoutEffect(() => {
		const labels = document.querySelectorAll(querySelector);
		if (!labels) throw new Error('query didnt match with any tag');

		animate(
			[...labels],
			{
				// y: ['30%', '0%'],// not gpu accelerated
				transform: ['translateY(15px)', 'translateY(0px)'],
				opacity: [0, 1],
			},
			{ duration: 0.5, easing: 'ease-out' },
		);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
