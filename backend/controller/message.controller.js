import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const sendMessage=async(req,res)=>{
    // console.log("message sent" , req.params.id);

    try {

        const {message} = req.body;
        const {id : recieverId}=req.params;
        const {senderId}=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{$all: [senderId, recieverId]},
        }).populate("message");

        if(!Conversation)
        //  return res.status(200).json([])
        {
            Conversation=await Conversation.create({
                participants:[senderId,recieverId]
            })
        }

        const newMessage=new Message({
            senderId,
            recieverId,
            message
        })

        if(newMessage){
            Conversation.newMessage.push(newMessage._id)
        }
        res.send(201).json(newMessage)



        //  SOCKET IO FUNCTIONALITYYYY

        // await Conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save() , newMessage.save()]);

        
    } catch (error) {
        console.log("error in sending message", error.message);
        res.send(500).json({error: "Internal Server Error"});
    }
}


export const getMessage=async(req,res)=>{
    try {
        const { id : userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            participants:{$all: [senderId, userToChatId]},
        }).populate("message");

        res.status(200).json(conversation.message);

        if(!conversation) return res.status(200).json([]);

        const message=conversation.message;
        
    } catch (error) {
        console.log("error in get message controller ", error.message);
        res.send(500).json({error: "Internal Server Error"});
        
    }
}