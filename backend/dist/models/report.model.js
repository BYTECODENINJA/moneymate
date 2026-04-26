import mongoose from "mongoose";
export var ReportStatusEnum;
(function (ReportStatusEnum) {
    ReportStatusEnum["SENT"] = "SENT";
    ReportStatusEnum["PENDING"] = "PENDING";
    ReportStatusEnum["FAILED"] = "FAILED";
    ReportStatusEnum["NO_ACTIVITY"] = "NO_ACTIVITY";
})(ReportStatusEnum || (ReportStatusEnum = {}));
const reportSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    period: {
        type: String,
        required: true,
    },
    sentDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: Object.values(ReportStatusEnum),
        default: ReportStatusEnum.PENDING,
    }
});
const ReportModel = mongoose.model("Report", reportSchema);
export default ReportModel;
//# sourceMappingURL=report.model.js.map