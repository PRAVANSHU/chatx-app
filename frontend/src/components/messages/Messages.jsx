import React, { useEffect, useRef } from 'react';
import Message from "./Message.jsx";
import useGetMessages from '../../hooks/useGetMessages.js';
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message, index) => (
        <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
          <Message message={message} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
}

export default Messages;