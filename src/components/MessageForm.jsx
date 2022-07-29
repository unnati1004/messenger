import React from "react";
// import Attachment from "./svg/Attachment";
import "./MessageForm.css"
const MessageForm = ({handleSubmit,text,setText}) => {
  
  const handlechange=(e)=>{
    setText(e.target.value)
  }
  return (
    <form action="" className="message_form" onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Enter message" value={text} onChange={(e)=>handlechange(e)} />
      </div>
      <div>
         <button className="btn">Send</button>
      </div>
    </form>
  );
};

export default MessageForm;
