export const getEnv = (key: string, defaultValue?: string): string => {
    const value = process.env[key];
    if (value !== undefined) return value;
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Environment variable "${key}" is not set`);
};

/**
 * Validates that all required environment variables are present at startup.
 * Throws a single error listing ALL missing variables instead of crashing on the first one.
 */
export const validateEnv = (requiredKeys: string[]): void => {
    const missing = requiredKeys.filter((key) => process.env[key] === undefined);
    if (missing.length > 0) {
        throw new Error(
            `\n\n🚨 Missing required environment variables:\n${missing
                .map((k) => `   - ${k}`)
                .join("\n")}\n\nPlease set them in your Render dashboard under Environment Variables.\n`
        );
    }
};
