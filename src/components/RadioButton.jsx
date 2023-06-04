import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
const RadioButton = () => {
    const [showCheck,setShowCheck]=useState(false);
    return (
       <TouchableOpacity style={[styles.checkBox,showCheck?{backgroundColor:"#9F2DFF",borderColor:"#9F2DFF",}:{backgroundColor:"white", borderColor:"grey",}]} onPress={()=>setShowCheck(!showCheck)}>
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