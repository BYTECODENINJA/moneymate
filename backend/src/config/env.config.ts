import {getEnv} from "../utils/get-env.js";

const envConfig = () => ({
   NODE_ENV: getEnv("NODE_ENV", "development"),
    PORT: getEnv("PORT", "3000"),
    BASE_PATH: getEnv("BASE_PATH", "/api"),
    MONGODB_URI: getEnv("MONGODB_URI", ""),

    JWT_SECRET: getEnv('JWT_SECRET', 'secret_jwt'),
    JWT_EXPIRES_IN: getEnv('JWT_EXPIRES_IN', '15min') as string,
    JWT_REFRESH_SECRET: getEnv('JWT_REFRESH_SECRET', 'secret_jwt_refresh'),
    JWT_REFRESH_EXPIRES_IN: getEnv('JWT_REFRESH_EXPIRES_IN', '7d') as string,

    GEMINI_API_KEY: getEnv('GEMINI_API_KEY'),

    FRONTEND_ORIGIN: getEnv('FRONTEND_ORIGIN', 'http://localhost:5173'),
})

export const Env  = envConfig();