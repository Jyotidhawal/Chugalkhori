import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
const{authUser}=useAuthContext();
const{selectedConversation }=useConversation();
const fromMe=message.senderId===authUser._id;
const formattedTime =extractTime(message.createdAt);
const chatClassName=fromMe? "chat-end" : "chat-start";
const profilePic = fromMe ? authUser.profilePic :selectedConversation?.profilePic;
const bubblebgColor = fromMe ? 'bg-blue-500' : "";

  return (
    <div className={`chat ${chatClassName} `}>
        <div className='chat-image-avtar '>
            <div className='w-10 rounded-full'>
                <img  className='rounded-full' 
                src={profilePic}
                 alt="chat bubble component" />
            </div>
        </div>
      <div className={`chat-bubble text-white  ${bubblebgColor} pb-2`}>{message.message}</div>
     
      
  {/* <div className="chat-bubble">You underestimate my power!</div> */}


      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center '> {formattedTime}</div>
    </div>
  )
}

export default Message
