import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
const RadioButton = ({onpress,item}) => {
    const [showCheck,setShowCheck]=useState(false);
    const manageButton=()=>{
        Alert.alert('Task Completion', 'Are you sure want to mark task as completed', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {
                onpress()
                setShowCheck(true)
            }},
        ]);
    }
    return (
        <TouchableOpacity 
            disabled={item.markAsincomplete}
            style={[styles.checkBox,showCheck?{backgroundColor:"#9F2DFF",borderColor:"#9F2DFF",}:{backgroundColor:"white", borderColor:"grey",}]} 
            onPress={manageButton}
        >
            {
                showCheck?
                <Entypo name='check'  color={"white"} size={15}/>:null
            }
       </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    checkBox:{
        width:25,
        height:25,
        borderRadius:25/2,
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    }
})
export default RadioButton