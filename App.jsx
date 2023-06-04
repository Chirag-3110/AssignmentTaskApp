import React,{useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import CreateNewTask from './src/components/CreateNewTaskModal';
import TaskInputContainer from './src/components/TaskInputContainer';
import TaskViewContainer from './src/components/Tasks/TaskViewContainer';
import TaskList from './src/components/Tasks/TaskList';
import UserImagesCollector from './src/components/UserImagesCollector';
import AddNewTaskbutton from './src/components/Tasks/AddNewTaskbutton';

const App=()=>{
  const taskModalef = useRef(null);
  return (
    <View style={styles.container}>
      <ScrollView >
        <TaskViewContainer/>
        <UserImagesCollector/>
        <TaskList/>
        <AddNewTaskbutton onpress={()=>taskModalef.current.showPopUp()}/>
      </ScrollView>
      <CreateNewTask ref={taskModalef}>
        {
          <TaskInputContainer onpress={()=>taskModalef.current.hidePopUp()}/>
        }
      </CreateNewTask>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
});

export default App;
