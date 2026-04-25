import mongoose, { Document, Schema } from "mongoose";

export enum TransactionStatusnum {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
    FAILED = "FAILED",
}
export enum RecuringIntervalEnum {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY",
}

export enum TransactionTypeEnum {
    INCOME = "INCOME",
    EXPENSE = "EXPENSE",
}

export enum paymentMethodEnum {
    CARD = "CARD",
    CASH = "CASH",
    BANK_TRANSFER = "BANK_TRANSFER",
    MOBILE_PAYMENT = "MOBILE_PAYMENT",
    AUTO_DEBIT = "AUTO_DEBIT",
    OTHER = "OTHER",
}

export interface TransactionDocument extends Document {
    userId: mongoose.Types.ObjectId;
    type: keyof typeof TransactionTypeEnum;
    title: string;
    amount: number;
    category: string;
    receiptUrl?: string;
    recuringInterval?: keyof typeof RecuringIntervalEnum;
    nextRecuringDate?: Date;
    lastProcessed?: Date;
    isRecurring: boolean;
    description: string;
    date: Date;
    status: keyof typeof TransactionStatusnum;
    paymentMethod: keyof typeof  paymentMethodEnum;
    createdAt: Date;
}

const transactionSchema = new Schema<TransactionDocument>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    type: { type: String, enum: Object.keys(TransactionTypeEnum), required: true },