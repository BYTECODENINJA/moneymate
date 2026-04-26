import type { Document } from "mongoose";
import mongoose from "mongoose";
export declare enum ReportFrequencyEnum {
    MONTHLY = "MONTHLY"
}
export interface ReportSettingDocument extends Document {
    userId: mongoose.Types.ObjectId;
    frequency: keyof typeof ReportFrequencyEnum;
    isEnabled: boolean;
    nextReportDate: Date;
    lastSentDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
declare const ReportModel: mongoose.Model<ReportSettingDocument, {}, {}, {}, Document<unknown, {}, ReportSettingDocument, {}, mongoose.DefaultSchemaOptions> & ReportSettingDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ReportSettingDocument>;
export default ReportModel;
//# sourceMappingURL=report-setting.model.d.ts.map