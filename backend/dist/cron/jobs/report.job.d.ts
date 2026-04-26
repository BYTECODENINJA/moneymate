export declare const processReportJob: () => Promise<{
    success: boolean;
    processedCount: number;
    failedCount: number;
    error?: never;
} | {
    success: boolean;
    error: string;
    processedCount?: never;
    failedCount?: never;
}>;
//# sourceMappingURL=report.job.d.ts.map