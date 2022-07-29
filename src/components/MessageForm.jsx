import React from "react";
import Attachment from "./svg/Attachment";
import "./MessageForm.css"
const MessageForm = ({handleSubmit,text,setText}) => {
  return (
    <form action="" className="message_form" onSubmit={handleSubmit}>
      {/* <label htmlFor="">
        <Attachment />
      </label>
      <input
        type="file"
      /> */}
      <div>
        <input type="text" placeholder="Enter message" value={text} onChange={(e)=>setText(e.target.value)} />
      </div>
      <div>
         <button className="btn">Send</button>
      </div>
    </form>
  );
};

export default MessageForm;
