import { type userDocument } from "../models/user.models.js";
declare global {
    namespace Express {
        interface User extends Omit<userDocument, "_id"> {
            _id?: any;
        }
    }
}
//# sourceMappingURL=analytics.type.d.ts.map