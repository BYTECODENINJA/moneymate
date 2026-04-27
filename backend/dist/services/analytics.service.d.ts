import { DateRangeEnum, type DateRangePreset } from "../enums/date-range.enum.js";
export declare const summaryAnalyticsService: (userId: string, dateRangePreset?: DateRangePreset, customFrom?: Date, customTo?: Date) => Promise<{
    availableBalance: any;
    totalIncome: any;
    totalExpenses: any;
    savingRate: {
        percentage: number;
        expenseRatio: number;
    };
    transactionCount: any;
    percentageChange: any;
    preset: {
        value: DateRangeEnum;
        label: string;
        from: Date;
        to: Date;
    } | {
        value: DateRangeEnum;
        label: string;
        from: Date;
        to: Date;
    } | {
        value: DateRangeEnum;
        label: string;
        from: undefined;
        to: undefined;
    };
}>;
export declare const chartAnalyticsService: (userId: string, dateRangePreset?: DateRangePreset, customFrom?: Date, customTo?: Date) => Promise<{
    chartData: any;
    totalIncomeCount: any;
    totalExpenseCount: any;
    preset: {
        value: DateRangeEnum;
        label: string;
        from: Date;
        to: Date;
    } | {
        value: DateRangeEnum;
        label: string;
        from: Date;
        to: Date;
    } | {
        value: DateRangeEnum;
        label: string;
        from: undefined;
        to: undefined;
    };
}>;
export declare const expensePieChartBreakdownService: (userId: string, dateRangePreset?: DateRangePreset, customFrom?: Date, customTo?: Date) => Promise<{
    preset: {
        value: DateRangeEnum;
        label: string;
        from: Date;
        to: Date;
    } | {
        value: DateRangeEnum;
        label: string;
        from: Date;
        to: Date;
    } | {
        value: DateRangeEnum;
        label: string;
        from: undefined;
        to: undefined;
    };
    totalSpent: any;
    breakdown: any;
}>;
//# sourceMappingURL=analytics.service.d.ts.map