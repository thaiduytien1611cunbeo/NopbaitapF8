import { legacy_createStore as createStore } from "redux";
import randomInt from "../script/random";

const initialState = {
  isDarkApp: false,
  number: localStorage.getItem("number"),
  maxCounter: Math.ceil(Math.log2(localStorage.getItem("number"))),
  counter: Math.ceil(Math.log2(localStorage.getItem("number"))),
  maxNumber: 2000,
  numberRandom: randomInt(0, localStorage.getItem("number")),
  suggest: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Slider/setNumber": {
      const { number } = action.payload;
      localStorage.setItem("number", number);

      return (state = {
        ...state,
        number: number,
        maxCounter: Math.ceil(Math.log2(number)),
        counter: Math.ceil(Math.log2(number)),
      });
    }
    // case "Slider/setCounter": {
    //   state = { ...state, number: action.payload };
    //   localStorage.setItem("number", action.payload);
    //   console.log(action.payload);
    // }
    case "Input/setSuggestIncrement": {
      return (state = { ...state, suggest: "Hmmm... Bạn nên TĂNG 1 xíu" });
    }
    case "Input/setSuggestDecrement": {
      return (state = { ...state, suggest: "Hmmm... Bạn nên GIẢM 1 xíu" });
    }
    case "Input/setSuggestTrue": {
      return (state = { ...state, suggest: "Xin chúc mừng bạn đã đúng" });
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(rootReducer);
