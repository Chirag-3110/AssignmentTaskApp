import React,{useRef} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TitleDesc from './src/components/TitleDesc';
import { useDispatch, useSelector } from 'react-redux';
import CreateNewTask from './src/components/CreateNewTaskModal';
import TaskInputContainer from './src/components/TaskInputContainer';
import Feather from 'react-native-vector-icons/Feather';
import TaskViewContainer from './src/components/Tasks/TaskViewContainer';
import TaskList from './src/components/Tasks/TaskList';
import UserImagesCollector from './src/components/UserImagesCollector';

const {width}=Dimensions.get("window");
const App=()=>{
  const taskModalef = useRef(null);
  const  allProducts  = useSelector(state => console.log(state));
  return (
    <ScrollView style={styles.container}>
      <TaskViewContainer/>
      <UserImagesCollector/>
      <TaskList/>
      <Pressable onPress={()=>taskModalef.current.showPopUp()} style={styles.taskCard}>
        <Feather name="plus" size={30} color="#B6B6B6" style={{marginRight: 15,}} />
        <Text style={{color:"#B6B6B6",fontWeight:"700",fontSize:20}}>
          Add Task
        </Text>
      </Pressable>
      <CreateNewTask ref={taskModalef}>
        {
          <TaskInputContainer onpress={()=>taskModalef.current.hidePopUp()}/>
        }
      </CreateNewTask>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  taskCard:{
    backgroundColor:'#E5E5E5',
    width:width-40,
    alignSelf:"center",
    paddingVertical:25,
    paddingHorizontal:15,
    borderRadius:10,
    marginVertical:10,
    flexDirection:"row",
    alignItems: 'center',
  }
});

export default App;
