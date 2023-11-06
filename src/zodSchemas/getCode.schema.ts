import { z } from 'zod';

export const codeSChema = z.string().length(4);

// .refine((ar) => {
// 	return +ar;
// });
