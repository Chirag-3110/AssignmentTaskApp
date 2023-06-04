import { combineReducers } from "redux";
import taskReducer from "./taskReducer";


const rootreducer=combineReducers({
    tash:taskReducer,
})

export default rootreducer;