import mongoose, {Document, Schema} from "mongoose";
import {compareValue, hashValue} from "../utils/bcrypt.js";

export interface userDocument extends Document{
    name: string;
    email: string;
    password: string;
    profilePicture: string | null;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (password: string) => Promise<boolean>;
    omitPassword: () => Omit<userDocument, "password">;
}

const userSchema = new Schema<userDocument>({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true, lowercase: true},
    password: {type: String, required: true, select: true},
    profilePicture: {type: String, default: null},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
},{
    timestamps: true,
});

userSchema.pre("save", async function (this: any, next: any) {
    if (this.isModified("password")) {
        this.password = await hashValue(this.password)
    }
    next();
})

userSchema.methods.omitPassword =  function(): Omit<userDocument, "password">{
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
}

userSchema.methods.comparePassword = async function(password: string){
   return compareValue(
       password, this.password
   )
}

const UserModel = mongoose.model<userDocument>("User", userSchema);
export default UserModel;
