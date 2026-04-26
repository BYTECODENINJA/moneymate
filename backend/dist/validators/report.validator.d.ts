import { z } from "zod";
export declare const reportSettingSchema: z.ZodObject<{
    isEnabled: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateReportSettingSchema: z.ZodObject<{
    isEnabled: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
export type UpdateReportSettingType = z.infer<typeof updateReportSettingSchema>;
//# sourceMappingURL=report.validator.d.ts.map