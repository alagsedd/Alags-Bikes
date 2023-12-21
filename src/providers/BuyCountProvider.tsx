import { ReactNode, useReducer } from "react";
import BuyCountReducer from "../reducers/BuyCountReducer";
import BuyCountContext from "../contexts/BuyCountContext";

interface Props {
  children: ReactNode;
}
const BuyCountProvider = ({ children }: Props) => {
  const [intialState, dispatch] = useReducer(BuyCountReducer, 0);

  return (
    <>
      <BuyCountContext.Provider value={{ intialState, dispatch }}>
        {children}
      </BuyCountContext.Provider>
    </>
  );
};

export default BuyCountProvider;
