import React, { useEffect, useRef } from "react";
import "./input.scss";
import { useDispatch, useSelector } from "react-redux";

const Input = () => {
  const inputRef = useRef();
  const numberRandom = useSelector((state) => state.numberRandom);
  const dispatch = useDispatch();
  console.log(numberRandom);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const word = e.key;

      if (word.match(/[0-9]/)) {
        inputRef.current.focus();
      } else if (word === "ArrowUp") {
        e.preventDefault();
        inputRef.current.value++;
      } else if (word === "ArrowDown" && inputRef.current.value > 1) {
        e.preventDefault();
        inputRef.current.value--;
      }
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueNumber = inputRef.current.value;
    inputRef.current.value = "";

    if (valueNumber < numberRandom) {
      dispatch({
        type: "Input/setSuggestIncrement",
      });
    } else if (valueNumber > numberRandom) {
      dispatch({
        type: "Input/setSuggestDecrement",
      });
    } else {
      dispatch({
        type: "Input/setSuggestTrue",
      });
    }
  };

  return (
    <form className="input-number" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Hãy thử nhập một số
        <input
          type="tex"
          id="name"
          placeholder="Thử một số"
          ref={inputRef}
          autoFocus
        />
      </label>
    </form>
  );
};

export default Input;
