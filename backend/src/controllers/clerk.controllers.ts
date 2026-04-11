import { Request, Response } from "express";

const clerkWebhook = async (
    res: Response,
    req: Request
) => {
    try{

        const { type,eventType, data } = req.body;
        const {first_name, last_name, image_url} = data || {};
        const email = data.email_addresses[0].email_address;

        let fullName = "";
        if(last_name){
            fullName = `${first_name} ${last_name}`;
        }
    } catch(err){
        console.log(err);
        return res.status(500).json({message: "Internal server error"});
    }
}

export { clerkWebhook};