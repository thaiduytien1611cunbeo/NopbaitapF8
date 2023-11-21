export const initialState = {
  showLoading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Loading/removeLoading": {
      return { ...state, showLoading: false };
    }
    case "Loading/addLoading": {
      return { ...state, showLoading: true };
    }
    default:
      return state;
  }
};
