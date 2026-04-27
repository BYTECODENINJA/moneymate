import mongoose, { Document, Schema } from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt.js";
const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, select: true },
    profilePicture: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, {
    timestamps: true,
});
userSchema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password = await hashValue(this.password);
    }
});
userSchema.methods.omitPassword = function () {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
};
userSchema.methods.comparePassword = async function (password) {
    return compareValue(password, this.password);
};
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
//# sourceMappingURL=user.models.js.map