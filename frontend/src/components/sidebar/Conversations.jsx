import React from 'react';
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  console.log("at Conversations");
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS:", conversations);

  return (
    <div className="flex flex-col py-2 overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          // emojiii heree
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading && <span className="loading loading-spinner mx-auto"></span>}
    </div>
  );
};

export default Conversations;
