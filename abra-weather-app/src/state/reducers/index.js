import { combineReducers } from "redux"
import weatherReducer from "./weatherReducer"

const reducers = combineReducers({
    weatherObject: weatherReducer
})

export default reducers;