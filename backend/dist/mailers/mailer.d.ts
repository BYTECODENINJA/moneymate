type Params = {
    to: string | string[];
    subject: string;
    text: string;
    html: string;
    from?: string;
};
export declare const sendEmail: ({ to, from, subject, text, html, }: Params) => Promise<import("resend").CreateEmailResponse>;
export {};
//# sourceMappingURL=mailer.d.ts.map