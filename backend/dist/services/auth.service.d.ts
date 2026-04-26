import mongoose from "mongoose";
import type { LoginSchemaType, RegisterSchemaType } from "../validators/auth.validator.js";
export declare const registerService: (body: RegisterSchemaType) => Promise<void>;
export declare const loginService: (body: LoginSchemaType) => Promise<{
    user: Omit<import("../models/user.models.js").userDocument, "password">;
    accessToken: string;
    expiresAt: number | undefined;
    reportSetting: (import("../models/report-setting.model.js").ReportSettingDocument & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }) | null;
}>;
//# sourceMappingURL=auth.service.d.ts.map