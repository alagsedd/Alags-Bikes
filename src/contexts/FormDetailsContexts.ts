import React from "react";
import { FormAction, FormDetails } from "../reducers/FormDetailsReducer";

interface FormDetailsContextType {
    formDetails:FormDetails
    dispatch: React.Dispatch<FormAction>
}

const FormDetailsContext= React.createContext<FormDetailsContextType>({}as FormDetailsContextType)
export default FormDetailsContext