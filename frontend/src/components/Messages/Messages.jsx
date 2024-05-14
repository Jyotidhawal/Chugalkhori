import { useEffect,useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeletons from '../skeletons/MessageSkeletons';
import Message from './Message'

const Messages = () => {
  const { messages,loading}=useGetMessages();
  const lastMessageRef=useRef();
 useEffect(()=>{
  setTimeout(()=>{

    lastMessageRef.current.scrollIntoView({behavior:"smooth"});
  },100)
 },[messages])

  // console.log( " MESSAGES : ", messages)
    return (
    <div className='px-4 flex-1 overflow-auto'>

          {!loading && messages.length > 0 &&
           messages.map((message)=>(
            <div  key={message._id}
            ref={lastMessageRef}>
              
            <Message  message={message}/>
            </div>
          ))}
      { loading && [...Array(3)].map((_,idx)=><MessageSkeletons key={idx}/>)
      }

      {!loading && messages.length===0 &&(
        <p className='text-center'> send a message  to start the conversation </p>
      )}
      

        {/* <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/> */}
      
    </div>
  )
}

export default Messages
