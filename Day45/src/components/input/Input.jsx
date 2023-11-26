import React, { useEffect, useRef } from "react";
import "./input.scss";
import { useDispatch, useSelector } from "react-redux";

const Input = () => {
  const inputRef = useRef();
  const numberRandom = useSelector((state) => state.numberRandom);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const maxNumber = useSelector((state) => state.maxNumber);

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

  useEffect(() => {
    if (counter === 0) {
      inputRef.current.readOnly = "true";
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "Input/setCounter",
    });
    const valueNumber = +inputRef.current.value;
    inputRef.current.value = "";

    if (valueNumber !== 0) {
      if (valueNumber < numberRandom) {
        console.log("tang");
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
          min={0}
          max={maxNumber}
          readOnly={false}
        />
      </label>
    </form>
  );
};

export default Input;
