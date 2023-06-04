import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
import RadioButton from '../RadioButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width}=Dimensions.get("window");
const TaskList = () => {
    return (
        <View>
            <View style={{flexDirection:"row",alignItems: 'center',justifyContent:"space-between",marginVertical:15}}>
                <Text style={{color:"grey",fontWeight:"600",fontSize:17,paddingHorizontal:20,marginTop:10}}>
                    Task List
                </Text>
                <Pressable>
                    <MaterialCommunityIcons name="delete" size={30} color="red" style={{marginRight: 15,}} />
                </Pressable>     
            </View>
            <View style={styles.taskCard}>
                <RadioButton/>
                <Text style={{color:"black",fontWeight:"700",fontSize:15}}>
                    User Research & Analysis
                </Text>
            </View>
            <View style={styles.taskCard}>
                <RadioButton/>
                <Text style={{color:"black",fontWeight:"700",fontSize:15}}>
                    Black & White Wireframe
                </Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
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
})
export default TaskList