import { Request, Response, NextFunction } from "express";
import {Webhook} from "svix";

const verifyClerkWebhook = async (req: Request, res: Response, next: NextFunction) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET as string;

    if(!WEBHOOK_SECRET) {
        return res.status(500).json({message: "WEBHOOK_SECRET is not defined please provide one"});
    }

    const svix_id = (req.headers["svix-id"] || "").toString();
    const svix_timestamp = (req.headers["svix-timestamp"] || "").toString();
    const svix_signature = (req.headers["svix-signature"] || "").toString();

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return res.status(400).json({message: "Missing required Svix headers"});
    }

    const headers = {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
    };

    const payload = JSON.stringify(req.body);
    const wh = new Webhook(WEBHOOK_SECRET);

    try{
        await wh.verify(payload, headers);
        next();
    } catch (err) {
        return res.status(400).json({message: "Invalid request signature"});
    }
}

export { verifyClerkWebhook}