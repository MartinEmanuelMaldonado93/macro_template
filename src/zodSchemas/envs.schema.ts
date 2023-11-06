import { z } from 'zod';

export const envSchema = z.object({
	VITE_MY_BASE_URL: z.string().url(),
	VITE_API_KEY: z.string(),
});
