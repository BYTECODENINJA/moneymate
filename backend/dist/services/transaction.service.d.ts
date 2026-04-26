import { TransactionTypeEnum } from "../models/transaction.model.js";
import type { CreateTransactionType, UpdateTransactionType } from "../validators/transaction.validator.js";
export declare const createTransactionService: (body: CreateTransactionType, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("../models/transaction.model.js").TransactionDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../models/transaction.model.js").TransactionDocument & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const getAllTransactionService: (userId: string, filters: {
    keyword?: string;
    type?: keyof typeof TransactionTypeEnum;
    recurringStatus?: "RECURRING" | "NON_RECURRING";
}, pagination: {
    pageSize: number;
    pageNumber: number;
}) => Promise<{
    transations: (import("mongoose").Document<unknown, {}, import("../models/transaction.model.js").TransactionDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../models/transaction.model.js").TransactionDocument & Required<{
        _id: import("mongoose").Types.ObjectId;
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
export declare const getTransactionByIdService: (userId: string, transactionId: string) => Promise<import("mongoose").Document<unknown, {}, import("../models/transaction.model.js").TransactionDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../models/transaction.model.js").TransactionDocument & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
declare const duplicateTransactionService: (userId: string, transactionId: string) => Promise<import("mongoose").Document<unknown, {}, import("../models/transaction.model.js").TransactionDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../models/transaction.model.js").TransactionDocument & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export default duplicateTransactionService;
export declare const updateTransactionService: (userId: string, transactionId: string, body: UpdateTransactionType) => Promise<void>;
export declare const deleteTransactionService: (userId: string, transactionId: string) => Promise<void>;
export declare const bulkDeleteTransactionService: (userId: string, transactionIds: string[]) => Promise<{
    sucess: boolean;
    deletedCount: number;
}>;
export declare const bulkTransactionService: (userId: string, transactions: CreateTransactionType[]) => Promise<{
    insertedCount: number;
    success: boolean;
}>;
export declare const scanReceiptService: (file: Express.Multer.File | undefined) => Promise<{
    error: string;
    title?: never;
    amount?: never;
    date?: never;
    description?: never;
    category?: never;
    paymentMethod?: never;
    type?: never;
    receiptUrl?: never;
} | {
    title: any;
    amount: any;
    date: any;
    description: any;
    category: any;
    paymentMethod: any;
    type: any;
    receiptUrl: string;
    error?: never;
}>;
//# sourceMappingURL=transaction.service.d.ts.map