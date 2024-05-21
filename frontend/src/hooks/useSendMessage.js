import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';

const useSendMessage = () => {
  const[loading , setLoading]=useState(false);

  const {messages, setMessages ,selectedConversation} = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(`http://127.0.0.1:4000/api/messages/send/${selectedConversation._id}`, {
        withCredentials : true,});
       
         
        
      
      const data = await res.data;
      if(data.error) {
        throw new Error(data.error);
      } 
      setMessages([...messages, data]);
    } catch (error) {
      toastr.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {  sendMessage , loading };
}

export default useSendMessage
