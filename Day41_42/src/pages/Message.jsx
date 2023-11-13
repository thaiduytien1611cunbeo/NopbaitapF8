import React from "react";
import "../assets/message.scss";

function Message(props) {
  return (
    <>
      <div className="message">
        {props.text}
        <span
          className="progress"
          style={{ backgroundColor: props.color }}
        ></span>
      </div>
    </>
  );
}

export default Message;
