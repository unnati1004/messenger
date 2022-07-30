import React from 'react'
import "./Message.css";
const Message = ({msg}) => {
  console.log(msg);
  return (
    <div className='message_wrapper'>
        <p>
          {msg.text}
        </p>
    </div>
  )
}

export default Message