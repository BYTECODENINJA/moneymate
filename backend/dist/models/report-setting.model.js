import mongoose from "mongoose";
export var ReportFrequencyEnum;
(function (ReportFrequencyEnum) {
    ReportFrequencyEnum["MONTHLY"] = "MONTHLY";
})(ReportFrequencyEnum || (ReportFrequencyEnum = {}));
const reportSettingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    frequency: { type: String, enum: Object.values(ReportFrequencyEnum), required: true },
    isEnabled: { type: Boolean, default: false },
    nextReportDate: { type: Date, default: Date.now },
    lastSentDate: { type: Date, default: null },
}, { timestamps: true });
const ReportSettingModel = mongoose.model("ReportSetting", reportSettingSchema);
export default ReportSettingModel;
//# sourceMappingURL=report-setting.model.js.map