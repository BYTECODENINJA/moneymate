export declare const receiptPrompt: string;
export declare const reportInsightPrompt: ({ totalIncome, totalExpenses, availableBalance, savingsRate, categories, periodLabel, }: {
    totalIncome: number;
    totalExpenses: number;
    availableBalance: number;
    savingsRate: number;
    categories: Record<string, {
        amount: number;
        percentage: number;
    }>;
    periodLabel: string;
}) => string;
//# sourceMappingURL=prompt.d.ts.map