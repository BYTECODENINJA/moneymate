import { type SignOptions } from "jsonwebtoken";
type TimeUnit = "s" | "m" | "h" | "d" | "w" | "y";
type TimeString = `${number}${TimeUnit}`;
export type AccessTokenPayload = {
    userId: string;
};
type SignOptsAndSecret = SignOptions & {
    secret: string;
    expiresIn?: TimeString | number;
};
export declare const signJwtToken: (payload: AccessTokenPayload, options?: SignOptsAndSecret) => {
    token: string;
    expiresAt: number | undefined;
};
export {};
//# sourceMappingURL=jwt.d.ts.map