import { View, Text, StyleSheet, Dimensions, TextInput, Keyboard, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
const {width}=Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskAction';

const TaskInputContainer = ({onpress}) => {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState("");
    const dispatch=useDispatch();

    const setNewTask=()=>{
        if(title==='' || desc===''){
            alert("Please enter all fields");
            return;
        }
        var newTask={taskTitle:title,taskDesc:desc,isSelect:false,markAsincomplete:false}
        dispatch(addTask(newTask));
        setTitle('');
        setDesc('')
        onpress()
        Keyboard.dismiss();
    }
    return (
        <View style={styles.container}>
            <Pressable style={{alignSelf:"flex-end",padding:15}} onPress={onpress}>
                <Entypo name="circle-with-cross" size={30} color="black" />
            </Pressable>
            <View>
                <Text style={styles.commomText}>Enter Task Title</Text>
                <TextInput
                    value={title}
                    style={styles.dropDown}
                    placeholderTextColor={"#1C3C5E"}
                    placeholder={'Title'}
                    onChangeText={title=>setTitle(title)}
                />
            </View>
            <View>
                <Text style={styles.commomText}>Enter Task Description</Text>
                <TextInput
                    value={desc}
                    style={styles.mulitTextInput}
                    placeholderTextColor={"#1C3C5E"}
                    placeholder={'Description...'}
                    multiline={true}
                    onChangeText={desc=>setDesc(desc)}
                />
            </View>
            <TouchableOpacity onPress={setNewTask} style={styles.buttonStyle}>
                <Text style={{
                    color:"white",
                    fontSize:20,
                    fontWeight:"700"
                }}>
                    Done...
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center",
    },
    commomText:{
        fontWeight:"bold",
        color:"#002D5B",
        fontSize:15
    },
    textInputContainer:{
        alignItems:"flex-start",
        padding:10,
        alignSelf:"center"
    },
    mulitTextInput:{
        width:width-30,
        height:100,
        borderWidth:1,
        borderColor:"#F2F2F2",
        borderRadius:8,
        paddingHorizontal:15,
        fontWeight:"700",
        marginVertical:10,
        color:"#1C3C5E",
        textAlignVertical:"top",
        elevation:5,
        backgroundColor:"white"
    },
    dropDown:{
        width:width-30,
        height:45,
        borderWidth:1,
        borderColor:"#F2F2F2",
        borderRadius:8,
        paddingHorizontal:15,
        fontWeight:"700",
        marginVertical:10,
        color:"#1C3C5E",
        elevation:5,
        backgroundColor:"white"
    },
    buttonStyle:{
        width:width-30,
        height:50,
        alignItems:"center",
        justifyContent: 'center',
        borderRadius:10,
        backgroundColor:"#DAA4F6",
        elevation:5
    }
})
export default TaskInputContainer