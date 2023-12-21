import React from "react"
import { BuyAction } from "../reducers/BuyCountReducer"

interface BuyCountContextType {
    intialState:number
    dispatch: React.Dispatch<BuyAction>
}

const BuyCountContext = React.createContext<BuyCountContextType>({} as BuyCountContextType)
export default BuyCountContext