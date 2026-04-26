export declare const processRecurringTransactions: () => Promise<{
    success: boolean;
    processedCount: number;
    failedCount: number;
    error?: never;
} | {
    success: boolean;
    error: any;
    processedCount?: never;
    failedCount?: never;
}>;
//# sourceMappingURL=transaction.job.d.ts.map