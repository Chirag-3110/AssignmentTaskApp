import { taskTypes } from "../constants/tastTypes";

const initialState={
    tasks:[],
}

const taskReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case taskTypes.SET_TASK:
            return {
                ...state,tasks:actions.payload
            }
        default:
            return state;
    }
}

export default taskReducer;