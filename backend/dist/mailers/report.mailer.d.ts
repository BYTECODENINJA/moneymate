import type { ReportType } from "../@types/report.type.js";
type ReportEmailParams = {
    email: string;
    username: string;
    report: ReportType;
    frequency: string;
};
export declare const sendReportEmail: (params: ReportEmailParams) => Promise<import("resend").CreateEmailResponse>;
export {};
//# sourceMappingURL=report.mailer.d.ts.map