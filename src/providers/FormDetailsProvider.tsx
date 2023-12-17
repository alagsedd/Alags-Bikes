import { ReactNode, useReducer } from "react";
import FormDetailsReducer from "../reducers/FormDetailsReducer";
import FormDetailsContext from "../contexts/FormDetailsContexts";

interface Props {
  children: ReactNode;
}

const FormDetailsProvider = ({ children }: Props) => {
  const form = {
    username: "",
    email: "",
  };
  const [formDetails, dispatch] = useReducer(FormDetailsReducer, form);

  return (
    <>
      <FormDetailsContext.Provider value={{ formDetails, dispatch }}>
        {children}
      </FormDetailsContext.Provider>
    </>
  );
};

export default FormDetailsProvider;
