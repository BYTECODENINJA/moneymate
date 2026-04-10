import {Router} from "express";
import {verifyClerkWebhook} from "../middleware/clerk.middleware";

const router = Router();

router.route("/webhooks/register").post(verifyClerkWebhook)