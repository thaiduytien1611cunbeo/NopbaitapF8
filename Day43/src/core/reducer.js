export const initialState = {
  isLoading: false,
  hiddenProduct: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Loading/removeLoading": {
      return { ...state, isLoading: false };
    }
    case "Loading/addLoading": {
      return { ...state, isLoading: true };
    }
    case "Product/showProduct": {
      return { ...state, hiddenProduct: false };
    }
    default:
      return state;
  }
};
