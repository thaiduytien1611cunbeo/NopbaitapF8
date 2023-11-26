import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Countdown = () => {
  const maxCounter = useSelector((state) => state.maxCounter);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const style = { color: "#2C7A7B", fontSize: "35px", marginBottom: "10px" };

  useEffect(() => {
    if (counter === 0) {
      dispatch({
        type: "Input/setSuggestFalse",
      });
    }
  });

  return (
    <h2 style={style}>
      Còn lại {counter}/{maxCounter} lần
    </h2>
  );
};

export default Countdown;
