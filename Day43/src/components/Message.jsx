import React from "react";
import "../assets/message.scss";

function Message() {
  return (
    <>
      <div className="message">
        Mừng bạn quay trở lại
        <span className="progress" style={{ backgroundColor: "green" }}></span>
      </div>
    </>
  );
}

export default Message;
