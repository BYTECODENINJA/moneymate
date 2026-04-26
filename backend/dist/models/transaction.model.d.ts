import mongoose, { Document } from "mongoose";
export declare enum TransactionStatusEnum {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}
export declare enum RecurringIntervalEnum {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY"
}
export declare enum TransactionTypeEnum {
    INCOME = "INCOME",
    EXPENSE = "EXPENSE"
}
export declare enum PaymentMethodEnum {
    CARD = "CARD",
    BANK_TRANSFER = "BANK_TRANSFER",
    MOBILE_PAYMENT = "MOBILE_PAYMENT",
    AUTO_DEBIT = "AUTO_DEBIT",
    CASH = "CASH",
    OTHER = "OTHER"
}
export interface TransactionDocument extends Document {
    userId: mongoose.Types.ObjectId;
    type: keyof typeof TransactionTypeEnum;
    title: string;
    amount: number;
    category: string;
    receiptUrl?: string;
    recurringInterval?: keyof typeof RecurringIntervalEnum;
    nextRecurringDate?: Date;
    lastProcessed?: Date;
    isRecurring: boolean;
    description?: string;
    date: Date;
    status: keyof typeof TransactionStatusEnum;
    paymentMethod: keyof typeof PaymentMethodEnum;
    createdAt: Date;
    updatedAt: Date;
}
declare const TransactionModel: mongoose.Model<TransactionDocument, {}, {}, {}, mongoose.Document<unknown, {}, TransactionDocument, {}, mongoose.DefaultSchemaOptions> & TransactionDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, TransactionDocument>;
export default TransactionModel;
//# sourceMappingURL=transaction.model.d.ts.map