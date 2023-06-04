import React from 'react'
import { View, Text, StyleSheet, Dimensions, Pressable, } from 'react-native'
import RadioButton from '../RadioButton';
const {width}=Dimensions.get("window");

const SingleTaskCard = ({item,index,makeTaskSelected,markAsComplete}) => {
    return (
        <Pressable 
            key={index}
            onPress={()=>makeTaskSelected(item,index)}
            style={[styles.taskCard,item.isSelect || item.markAsincomplete?{elevation:10,shadowColor: '#C153FA',backgroundColor:"#E3AEFE"}:{backgroundColor:'#E5E5E5',}]}
        >
            <Text style={{color:item.isSelect || item.markAsincomplete?"#8102C2":"black",fontWeight:"700",fontSize:15,position:"absolute",right:10,top:10}}>
                {item.markAsincomplete?"Completed":""}
            </Text>
            <RadioButton item={item} onpress={()=>markAsComplete(item,index)}/>
            <Text style={{color:item.isSelect || item.markAsincomplete?"#8102C2":"black",fontWeight:"700",fontSize:15}}>
                {item.taskTitle}
            </Text>
        </Pressable>
    )
}
const styles=StyleSheet.create({
    taskCard:{
        width:width-40,
        alignSelf:"center",
        paddingVertical:25,
        paddingHorizontal:15,
        borderRadius:10,
        marginVertical:10,
        flexDirection:"row",
        alignItems: 'center',
        backgroundColor:'#E5E5E5'
    }
})
export default SingleTaskCard