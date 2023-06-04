import { tastTypes } from "../constants/tastTypes"

const addTasks=(shops)=>{
    return {
        type:tastTypes.SET_TASK,
        payload:shops
    }
}
export {
    addTasks,
}