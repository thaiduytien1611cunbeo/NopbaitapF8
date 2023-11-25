import React from "react";
import { useSelector } from "react-redux";

const Title = () => {
  const style = { color: "#319795", fontSize: "35px", marginBottom: "10px" };
  const suggest = useSelector((state) => state.suggest);

  return (
    <h1 style={style}>
      {suggest || "Chào mừng bạn đến với trò chơi đoán số!"}
    </h1>
  );
};

export default Title;
