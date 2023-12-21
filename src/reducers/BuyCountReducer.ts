export interface BuyAction {
    type:"addItem"
}
const BuyCountReducer=(intialState: number, action:BuyAction):number=> {
    if (action.type ==="addItem") return intialState + 1
    return intialState
}
export default BuyCountReducer