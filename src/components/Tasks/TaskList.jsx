import { View, Text, StyleSheet, Dimensions, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllTasks, setMarkAsCompleteTask, setSelectedTask } from '../../redux/actions/taskAction';
import SingleTaskCard from './singleTaskCard';
const TaskList = () => {
    const dispatch=useDispatch();
    const {tasks}=useSelector(state=>state.tash)
    const [taskArray,setTasksArray]=useState([]);

    useEffect(()=>{
        setTasksArray(tasks)
    },[tasks])
    const makeTaskSelected=(selcted,itemIndex)=>{
        setTasksArray((items) =>
            items.map((val, index) => {
                if (index === itemIndex) {
                    val.isSelect=true;
                }
                else{
                    val.isSelect=false
                }
                return val;
            })
        );
        dispatch(setSelectedTask({title:selcted.taskTitle,description:selcted.taskDesc}))
    }

    const clearAllTasks=()=>{
        dispatch(removeAllTasks())
        alert("All tasks cleared")
    }

    const markAsComplete=(selcted,itemIndex)=>{
        setTasksArray((items) =>
            items.map((val, index) => {
                if (index === itemIndex) {
                    val.markAsincomplete=true;
                }
                return val;
            })
        );
        dispatch(setMarkAsCompleteTask(taskArray));
    }
    return (
        <View>
            <View style={{flexDirection:"row",alignItems: 'center',justifyContent:"space-between",marginVertical:15}}>
                <Text style={{color:"grey",fontWeight:"600",fontSize:17,paddingHorizontal:20,marginTop:10}}>
                    Task List
                </Text>
                <Pressable onPress={clearAllTasks}>
                    <MaterialCommunityIcons name="delete" size={30} color="red" style={{marginRight: 15,}} />
                </Pressable>     
            </View>
            {
                taskArray.length>0 &&
                taskArray.map((item,index)=>(
                    <SingleTaskCard 
                        item={item} 
                        index={index} 
                        makeTaskSelected={makeTaskSelected} 
                        markAsComplete={markAsComplete} 
                    />
                ))
            }
        </View>
    )
}
export default TaskList