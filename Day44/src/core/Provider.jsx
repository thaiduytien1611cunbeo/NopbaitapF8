import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const ProviderContext = createContext();
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProviderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
}

export default Provider;
