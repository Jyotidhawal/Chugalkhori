import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end '>
        <div className='chat-image-avtar '>
            <div className='w-10 rounded-full'>
                <img  className='rounded-full' 
                src="../../../public/ShinchanDp.jpg"
                 alt="chat bubble component" />
            </div>
        </div>
      {/* <div className='{chat-bubble text-white  bg-blue-500}'> Hii, Whatsapp...</div> */}
     
      
  <div className="chat-bubble">You underestimate my power!</div>


      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center '> 10:30</div>
    </div>
  )
}

export default Message
