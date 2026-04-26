import { z } from "zod";
import { PaymentMethodEnum, RecurringIntervalEnum, TransactionTypeEnum } from "../models/transaction.model.js";
export declare const transactionIdSchema: z.ZodString;
export declare const baseTransactionSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        INCOME: TransactionTypeEnum.INCOME;
        EXPENSE: TransactionTypeEnum.EXPENSE;
    }>;
    amount: z.ZodNumber;
    category: z.ZodString;
    date: z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodDate]>, z.ZodTransform<Date, string | Date>>;
    isRecurring: z.ZodDefault<z.ZodBoolean>;
    recurringInterval: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        DAILY: RecurringIntervalEnum.DAILY;
        WEEKLY: RecurringIntervalEnum.WEEKLY;
        MONTHLY: RecurringIntervalEnum.MONTHLY;
        YEARLY: RecurringIntervalEnum.YEARLY;
    }>>>;
    receiptUrl: z.ZodOptional<z.ZodString>;
    paymentMethod: z.ZodDefault<z.ZodEnum<{
        CARD: PaymentMethodEnum.CARD;
        BANK_TRANSFER: PaymentMethodEnum.BANK_TRANSFER;
        MOBILE_PAYMENT: PaymentMethodEnum.MOBILE_PAYMENT;
        AUTO_DEBIT: PaymentMethodEnum.AUTO_DEBIT;
        CASH: PaymentMethodEnum.CASH;
        OTHER: PaymentMethodEnum.OTHER;
    }>>;
}, z.core.$strip>;
export declare const bulkDeleteTransactionSchema: z.ZodObject<{
    transactionIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const bulkTransactionSchema: z.ZodObject<{
    transactions: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<{
            INCOME: TransactionTypeEnum.INCOME;
            EXPENSE: TransactionTypeEnum.EXPENSE;
        }>;
        amount: z.ZodNumber;
        category: z.ZodString;
        date: z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodDate]>, z.ZodTransform<Date, string | Date>>;
        isRecurring: z.ZodDefault<z.ZodBoolean>;
        recurringInterval: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            DAILY: RecurringIntervalEnum.DAILY;
            WEEKLY: RecurringIntervalEnum.WEEKLY;
            MONTHLY: RecurringIntervalEnum.MONTHLY;
            YEARLY: RecurringIntervalEnum.YEARLY;
        }>>>;
        receiptUrl: z.ZodOptional<z.ZodString>;
        paymentMethod: z.ZodDefault<z.ZodEnum<{
            CARD: PaymentMethodEnum.CARD;
            BANK_TRANSFER: PaymentMethodEnum.BANK_TRANSFER;
            MOBILE_PAYMENT: PaymentMethodEnum.MOBILE_PAYMENT;
            AUTO_DEBIT: PaymentMethodEnum.AUTO_DEBIT;
            CASH: PaymentMethodEnum.CASH;
            OTHER: PaymentMethodEnum.OTHER;
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const createTransactionSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        INCOME: TransactionTypeEnum.INCOME;
        EXPENSE: TransactionTypeEnum.EXPENSE;
    }>;
    amount: z.ZodNumber;
    category: z.ZodString;
    date: z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodDate]>, z.ZodTransform<Date, string | Date>>;
    isRecurring: z.ZodDefault<z.ZodBoolean>;
    recurringInterval: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        DAILY: RecurringIntervalEnum.DAILY;
        WEEKLY: RecurringIntervalEnum.WEEKLY;
        MONTHLY: RecurringIntervalEnum.MONTHLY;
        YEARLY: RecurringIntervalEnum.YEARLY;
    }>>>;
    receiptUrl: z.ZodOptional<z.ZodString>;
    paymentMethod: z.ZodDefault<z.ZodEnum<{
        CARD: PaymentMethodEnum.CARD;
        BANK_TRANSFER: PaymentMethodEnum.BANK_TRANSFER;
        MOBILE_PAYMENT: PaymentMethodEnum.MOBILE_PAYMENT;
        AUTO_DEBIT: PaymentMethodEnum.AUTO_DEBIT;
        CASH: PaymentMethodEnum.CASH;
        OTHER: PaymentMethodEnum.OTHER;
    }>>;
}, z.core.$strip>;
export declare const updateTransactionSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    type: z.ZodOptional<z.ZodEnum<{
        INCOME: TransactionTypeEnum.INCOME;
        EXPENSE: TransactionTypeEnum.EXPENSE;
    }>>;
    amount: z.ZodOptional<z.ZodNumber>;
    category: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodDate]>, z.ZodTransform<Date, string | Date>>>;
    isRecurring: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    recurringInterval: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        DAILY: RecurringIntervalEnum.DAILY;
        WEEKLY: RecurringIntervalEnum.WEEKLY;
        MONTHLY: RecurringIntervalEnum.MONTHLY;
        YEARLY: RecurringIntervalEnum.YEARLY;
    }>>>>;
    receiptUrl: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    paymentMethod: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        CARD: PaymentMethodEnum.CARD;
        BANK_TRANSFER: PaymentMethodEnum.BANK_TRANSFER;
        MOBILE_PAYMENT: PaymentMethodEnum.MOBILE_PAYMENT;
        AUTO_DEBIT: PaymentMethodEnum.AUTO_DEBIT;
        CASH: PaymentMethodEnum.CASH;
        OTHER: PaymentMethodEnum.OTHER;
    }>>>;
}, z.core.$strip>;
export type CreateTransactionType = z.infer<typeof createTransactionSchema>;
export type UpdateTransactionType = z.infer<typeof updateTransactionSchema>;
export type BulkDelteTransactionType = z.infer<typeof bulkDeleteTransactionSchema>;
//# sourceMappingURL=transaction.validator.d.ts.map