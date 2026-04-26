import { z } from "zod";
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateUserType = z.infer<typeof updateUserSchema>;
//# sourceMappingURL=user.validator.d.ts.map