import { taskTypes } from "../constants/tastTypes";

const initialState={
    tasks:[],
    selectedTaskTitle:"",
    selectedTaskDesc:""
}

const taskReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case taskTypes.ADD_NEW_TASK:
            return {
                ...state,tasks:[...state.tasks,actions.payload]
            }
        case taskTypes.REMOVE_ALL_TASKS:
            return {
                ...state,tasks:[],selectedTaskDesc:"",selectedTaskDesc:""
            }
        case taskTypes.SET_SELECTED_TASK_DATA:
            return{
                ...state,selectedTaskTitle:actions.payload.title,selectedTaskDesc:actions.payload.description
            }
        case taskTypes.setMarkAsCompleteTask:
            return{
                ...state,tasks:[...actions.payload]
            }
        default:
            return state;
    }
}

export default taskReducer;