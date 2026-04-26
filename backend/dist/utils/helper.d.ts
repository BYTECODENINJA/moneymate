import { RecurringIntervalEnum } from "../models/transaction.model.js";
export declare function calulateNextReportDate(lastSentDate?: Date): Date;
export declare function calculateNextOccurrence(date: Date, recurringInterval: keyof typeof RecurringIntervalEnum): Date;
export declare function capitalizeFirstLetter(string: string): string;
//# sourceMappingURL=helper.d.ts.map