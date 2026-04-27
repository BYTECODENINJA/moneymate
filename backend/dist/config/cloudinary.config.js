import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { Env } from "./env.config.js";
import multer from "multer";
cloudinary.config({
    cloud_name: Env.CLOUDINARY_CLOUD_NAME,
    api_key: Env.CLOUDINARY_API_KEY,
    api_secret: Env.CLOUDINARY_API_SECRET,
});
const STORAGE_PARAMS = {
    folder: "images",
    allowed_formats: ["jpg", "png", "jpeg"],
    resource_type: "image", // Fixed: was "rescource_type" (typo)
    quality: "auto:good",
};
const storage = new CloudinaryStorage({
    cloudinary,
    params: (req, file) => ({
        ...STORAGE_PARAMS,
    }),
});
export const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024, files: 1 },
    fileFilter: (_, file, cb) => {
        const isValid = /^image\/(jpe?g|png)$/.test(file.mimetype);
        if (!isValid) {
            // Fixed: was "return" which left multer hanging; must call cb
            return cb(new Error("Only JPEG and PNG images are allowed"));
        }
        cb(null, true);
    },
});
//# sourceMappingURL=cloudinary.config.js.map