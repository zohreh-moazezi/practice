import { z } from 'zod';

export type FormInputs = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  username: z
    .string()
    .min(5, { message: 'Too Short' })
    .max(32, { message: 'Too Long' }),
  password: z
    .string()
    .min(5, { message: 'Too Short' })
    .max(32, { message: 'Too Long' }),
});
