import React, { useState } from "react";
import { useSelector } from "react-redux";

const Countdown = () => {
  const maxCounter = useSelector((state) => state.maxCounter);
  const counter = useSelector((state) => state.counter);

  const style = { color: "#2C7A7B", fontSize: "35px", marginBottom: "10px" };

  return (
    <h2 style={style}>
      Còn lại {counter}/{maxCounter} lần
    </h2>
  );
};

export default Countdown;
