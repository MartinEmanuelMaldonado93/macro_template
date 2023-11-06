import { envSchema } from '../zodSchemas';

const envs = envSchema.parse({
	VITE_MY_BASE_URL: import.meta.env.VITE_MY_BASE_URL,
	VITE_API_KEY: import.meta.env.VITE_API_KEY,
});

export { envs };
