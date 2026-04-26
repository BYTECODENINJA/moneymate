import mongoose, { Document } from "mongoose";
export interface userDocument extends Document {
    name: string;
    email: string;
    password: string;
    profilePicture: string | null;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (password: string) => Promise<boolean>;
    omitPassword: () => Omit<userDocument, "password">;
}
declare const UserModel: mongoose.Model<userDocument, {}, {}, {}, mongoose.Document<unknown, {}, userDocument, {}, mongoose.DefaultSchemaOptions> & userDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, userDocument>;
export default UserModel;
//# sourceMappingURL=user.models.d.ts.map