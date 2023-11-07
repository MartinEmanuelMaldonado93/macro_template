import { z } from 'zod';

export const data = z.object({
	id: z.number(),
	lastName: z.string(),
	email: z.string().email(),
});

export type DataType = z.infer<typeof data>;
