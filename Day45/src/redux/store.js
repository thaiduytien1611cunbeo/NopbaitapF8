import { legacy_createStore as createStore } from "redux";
import randomInt from "../script/random";

const initialState = {
  isDarkApp: false,
  number: localStorage.getItem("number") || 1000,
  maxCounter: Math.ceil(Math.log2(localStorage.getItem("number") || 1000)),
  counter: Math.ceil(Math.log2(localStorage.getItem("number") || 1000)),
  maxNumber: 2000,
  numberRandom: randomInt(0, localStorage.getItem("number") || 1000),
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
    case "Input/setCounter": {
      if (state.counter > 0) {
        return (state = { ...state, counter: state.counter - 1 });
      }
    }
    case "Input/setSuggestIncrement": {
      return (state = { ...state, suggest: "Hmmm... Bạn nên TĂNG 1 xíu" });
    }
    case "Input/setSuggestDecrement": {
      return (state = { ...state, suggest: "Hmmm... Bạn nên GIẢM 1 xíu" });
    }
    case "Input/setSuggestTrue": {
      return (state = { ...state, suggest: "Xin chúc mừng bạn đã đúng" });
    }
    case "Input/setSuggestFalse": {
      return (state = { ...state, suggest: "Hết lượt rồi má" });
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(rootReducer);
