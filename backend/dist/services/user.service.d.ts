import type { UpdateUserType } from "../validators/user.validator.js";
export declare const findByIdUserService: (userId: string) => Promise<Omit<import("../models/user.models.js").userDocument, "password"> | undefined>;
export declare const updateUserService: (userId: string, body: UpdateUserType, profilePic?: Express.Multer.File) => Promise<Omit<import("../models/user.models.js").userDocument, "password">>;
//# sourceMappingURL=user.service.d.ts.map