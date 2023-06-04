import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
const {width}=Dimensions.get("window");

const AddNewTaskbutton = ({onpress}) => {
    return (
        <Pressable onPress={onpress} style={styles.taskCard}>
          <Feather name="plus" size={30} color="#B6B6B6" style={{marginRight: 15,}} />
          <Text style={{color:"#B6B6B6",fontWeight:"700",fontSize:20}}>
            Add Task
          </Text>
        </Pressable>
    )
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
export default AddNewTaskbutton