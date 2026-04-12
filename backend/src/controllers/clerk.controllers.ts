import { Request, Response } from "express";
import { User } from "../models/user.model";

const clerkWebhook = async (
    req: Request,
    res: Response
) => {
    try {

        const {type, data} = req.body;
        const {first_name, last_name, image_url} = data || {};
        const email = data.email_addresses?.[0]?.email_address;

        let fullName = "";
        if (last_name) {
            fullName = `${first_name} ${last_name}`;
        } else {
            fullName = first_name;
        }

        switch (type) {
            case "user.created":
                const isUserDetailEmpty = [email, fullName, image_url]?.some(
                    (field) => field?.trim() === ""
                );
                if (isUserDetailEmpty) {
                    return res.status(400).json({message: "User detail is empty"});
                }
                const existedUser = await User.findOne({email});

                if (existedUser) {
                    return res.status(400).json({message: "User already exists"});
                }
                const user = await User.create({
                    fullName,
                    email,
                    imageUrl: image_url,
                });

                if (!user) {
                    return res.status(500).json({message: "Internal server error"});
                }
                break;
            default:
                return res.status(200).json({message: `unhandled event type: ${type}`});
        }
        return res.status(200).json({message: "User was successfully created"});

    } catch(err){
        console.log(err);
        return res.status(500).json({message: "Oppsy the user was not successfully created"});
    }
}

export { clerkWebhook};