import mongoose from "mongoose";
import type { Document } from "mongoose";
export declare enum ReportStatusEnum {
    SENT = "SENT",
    PENDING = "PENDING",
    FAILED = "FAILED",
    NO_ACTIVITY = "NO_ACTIVITY"
}
export interface ReportDocument extends Document {
    userId: mongoose.Types.ObjectId;
    period: string;
    sentDate: Date;
    status: keyof typeof ReportStatusEnum;
    createdAt: Date;
    updatedAt: Date;
}
declare const ReportModel: mongoose.Model<ReportDocument, {}, {}, {}, mongoose.Document<unknown, {}, ReportDocument, {}, mongoose.DefaultSchemaOptions> & ReportDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ReportDocument>;
export default ReportModel;
//# sourceMappingURL=report.model.d.ts.map