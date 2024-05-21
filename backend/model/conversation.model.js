import mongoose, { mongo } from "mongoose";
// import  userdata  from "../../frontend/whatsapp/API/user";

const conversationSchema=new mongoose.Schema({
    participants:[
        { type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
    ],

    message:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message',
        default:""
    }],
}  ,{timestamps:true} )
 
const Conversation =mongoose.model('Conversation', conversationSchema);
export default Conversation;