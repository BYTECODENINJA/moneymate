//calling database connection file
import {configDotenv} from "dotenv";
import connectDb from "./db";
import app from "./app";

const port = 4000;

configDotenv({ path: "./.env"});

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}).catch((error) => {
    console.log("Database connection error:", error);
    process.exit(1);
});
