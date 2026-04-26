import {type userDocument} from "../models/user.models.js";

declare global {
    namespace Express {
        interface User extends userDocument {
            _id?: any;
        }
    }
}