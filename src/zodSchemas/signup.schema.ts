import { z } from 'zod';

export const signUpSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(10),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'passwords must match',
		path: ['confirmPassword'],
	});

export type SignupSchemaType = z.infer<typeof signUpSchema>;
