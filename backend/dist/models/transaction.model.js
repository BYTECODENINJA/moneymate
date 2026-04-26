import mongoose, { Document, Schema } from "mongoose";
export var TransactionStatusEnum;
(function (TransactionStatusEnum) {
    TransactionStatusEnum["PENDING"] = "PENDING";
    TransactionStatusEnum["COMPLETED"] = "COMPLETED";
    TransactionStatusEnum["FAILED"] = "FAILED";
})(TransactionStatusEnum || (TransactionStatusEnum = {}));
export var RecurringIntervalEnum;
(function (RecurringIntervalEnum) {
    RecurringIntervalEnum["DAILY"] = "DAILY";
    RecurringIntervalEnum["WEEKLY"] = "WEEKLY";
    RecurringIntervalEnum["MONTHLY"] = "MONTHLY";
    RecurringIntervalEnum["YEARLY"] = "YEARLY";
})(RecurringIntervalEnum || (RecurringIntervalEnum = {}));
export var TransactionTypeEnum;
(function (TransactionTypeEnum) {
    TransactionTypeEnum["INCOME"] = "INCOME";
    TransactionTypeEnum["EXPENSE"] = "EXPENSE";
})(TransactionTypeEnum || (TransactionTypeEnum = {}));
export var PaymentMethodEnum;
(function (PaymentMethodEnum) {
    PaymentMethodEnum["CARD"] = "CARD";
    PaymentMethodEnum["BANK_TRANSFER"] = "BANK_TRANSFER";
    PaymentMethodEnum["MOBILE_PAYMENT"] = "MOBILE_PAYMENT";
    PaymentMethodEnum["AUTO_DEBIT"] = "AUTO_DEBIT";
    PaymentMethodEnum["CASH"] = "CASH";
    PaymentMethodEnum["OTHER"] = "OTHER";
})(PaymentMethodEnum || (PaymentMethodEnum = {}));
const transactionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: Object.values(TransactionTypeEnum),
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    receiptUrl: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    isRecurring: {
        type: Boolean,
        default: false,
    },
    recurringInterval: {
        type: String,
        enum: Object.values(RecurringIntervalEnum),
        default: null,
    },
    nextRecurringDate: {
        type: Date,
        default: null,
    },
    lastProcessed: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: Object.values(TransactionStatusEnum),
        default: TransactionStatusEnum.COMPLETED,
    },
    paymentMethod: {
        type: String,
        enum: Object.values(PaymentMethodEnum),
        default: PaymentMethodEnum.CASH,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
});
const TransactionModel = mongoose.model("Transaction", transactionSchema);
export default TransactionModel;
//# sourceMappingURL=transaction.model.js.map