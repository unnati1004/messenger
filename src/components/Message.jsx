import React from 'react'

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