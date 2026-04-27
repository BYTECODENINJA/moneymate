import "dotenv/config";
import { getEnv, validateEnv } from "../utils/get-env.js";

// Validate ALL required vars upfront — one clear error listing everything missing
validateEnv([
    "MONGODB_URI",
    "JWT_SECRET",
    "JWT_REFRESH_SECRET",
    "GEMINI_API_KEY",
    "RESEND_API_KEY",
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
    "FRONTEND_ORIGIN",
]);

const envConfig = () => ({
    NODE_ENV: getEnv("NODE_ENV", "development"),
    PORT: getEnv("PORT", "4000"),
    BASE_PATH: getEnv("BASE_PATH", "/api"),
    MONGODB_URI: getEnv("MONGODB_URI"),

    JWT_SECRET: getEnv("JWT_SECRET"),
    JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15min") as string,
    JWT_REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
    JWT_REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "7d") as string,

    GEMINI_API_KEY: getEnv("GEMINI_API_KEY"),

    FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "http://localhost:5173"),
    RESEND_MAILER_SENDER: getEnv("RESEND_MAILER_SENDER", "onboarding@resend.dev"),
    RESEND_API_KEY: getEnv("RESEND_API_KEY"),
    CLOUDINARY_CLOUD_NAME: getEnv("CLOUDINARY_CLOUD_NAME"),
    CLOUDINARY_API_KEY: getEnv("CLOUDINARY_API_KEY"),
    CLOUDINARY_API_SECRET: getEnv("CLOUDINARY_API_SECRET"),
});

export const Env = envConfig();
