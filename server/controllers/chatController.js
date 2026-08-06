import { askAI } from "../services/chatService.js";

export const chat = async (req,res)=>{

    try{

        const {message}=req.body;

        const reply=await askAI(message);

        res.json({
            reply
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

}
