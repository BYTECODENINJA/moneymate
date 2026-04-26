import mongoose from "mongoose";
import type { UpdateReportSettingType } from "../validators/report.validator.js";
export declare const getAllReportsService: (userId: string, pagination: {
    pageSize: number;
    pageNumber: number;
}) => Promise<{
    reports: (mongoose.Document<unknown, {}, import("../models/report.model.js").ReportDocument, {}, mongoose.DefaultSchemaOptions> & import("../models/report.model.js").ReportDocument & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[];
    pagination: {
        pageSize: number;
        pageNumber: number;
        totalCount: number;
        totalPages: number;
        skip: number;
    };
}>;
export declare const updateReportSettingService: (userId: string, body: UpdateReportSettingType) => Promise<void>;
export declare const generateReportService: (userId: string, fromDate: Date, toDate: Date) => Promise<{
    period: string;
    summary: {
        income: number;
        expenses: number;
        balance: number;
        savingsRate: number;
        topCategories: {
            name: any;
            amount: any;
            percent: any;
        }[];
    };
    insights: any;
} | null>;
//# sourceMappingURL=report.service.d.ts.map