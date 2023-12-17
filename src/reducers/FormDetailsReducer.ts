interface UsernameAction {
    type: "handleUsername"
    username:string
}
interface EmailAction {
    type:"handleEmail"
    email:string
}
export interface FormDetails {
    username:string
    email:string
}
export type FormAction = EmailAction | UsernameAction


const FormDetailsReducer= (state: FormDetails,action:FormAction): FormDetails=> {
    if(action.type ==="handleEmail") return {...state, email: action.email}
    if(action.type ==="handleUsername") return {...state,  username: action.username}
    return state
}
export default FormDetailsReducer