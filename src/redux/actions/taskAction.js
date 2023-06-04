import { taskTypes } from "../constants/tastTypes"

const addTask=(task)=>{
    return {
        type:taskTypes.ADD_NEW_TASK,
        payload:task
    }
}
const removeAllTasks=()=>{
    return {
        type:taskTypes.REMOVE_ALL_TASKS
    }
}
const setSelectedTask=(selectedTask)=>{
    return {
        type:taskTypes.SET_SELECTED_TASK_DATA,
        payload:selectedTask
    }
}
const setMarkAsCompleteTask=(tasks)=>{
    return{
        type:taskTypes.MARK_TASK_AS_COMPLETE,
        payload:tasks
    }
}
export {
    addTask,
    removeAllTasks,
    setSelectedTask,
    setMarkAsCompleteTask
}