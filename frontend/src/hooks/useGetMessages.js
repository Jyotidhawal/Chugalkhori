import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast';
import axios from 'axios';

const useGetMessages = () => {
  const [loading ,setLoading ]=useState()
  const{messages,setMessages,selectedConversation}=useConversation();

  useEffect(() =>{
    const getMessages=async ()=>{
      setLoading(true);
      try {
        const res=await axios.get(`http://127.0.0.1:4000/api/messages/${selectedConversation._id}`,{
          withCredentials : true
        });
        const data=await res.data;
        if(data.error){
          throw new Error(data.error)
        }
        setMessages(data);
        
      } catch (error) {
        toast.error(error.messages);
      } finally{
        setLoading(false);
      }
    }
     if(selectedConversation ?._id) getMessages();

},[selectedConversation?._id , setMessages ])

   console.log("at usegetmessage " , messages);
   return{messages,loading} 
    
  }



export default useGetMessages
