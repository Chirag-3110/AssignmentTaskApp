import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
const {width}=Dimensions.get('window');
const TaskInputContainer = ({onpress}) => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.commomText}>Enter Task Title</Text>
                <TextInput
                    style={styles.dropDown}
                    placeholderTextColor={"#1C3C5E"}
                    placeholder={'Title'}
                />
            </View>
            <View>
                <Text style={styles.commomText}>Enter Task Description</Text>
                <TextInput
                    style={styles.mulitTextInput}
                    placeholderTextColor={"#1C3C5E"}
                    placeholder={'Description...'}
                    multiline={true}
                />
            </View>
            <TouchableOpacity onPress={onpress} style={{
                width:width-30,
                height:50,
                alignItems:"center",
                justifyContent: 'center',
                borderRadius:10,
                backgroundColor:"rgba(173,29,254,0.60)",
            }}>
                <Text style={{
                    color:"white",
                    fontSize:20,
                    fontWeight:"700"
                }}>
                    Done...
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
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
        borderColor:"#A3A3A3",
        borderRadius:8,
        paddingHorizontal:15,
        fontWeight:"700",
        marginVertical:10,
        color:"#1C3C5E",
        textAlignVertical:"top"
    },
    dropDown:{
        width:width-30,
        height:45,
        borderWidth:1,
        borderColor:"#A3A3A3",
        borderRadius:8,
        paddingHorizontal:15,
        fontWeight:"700",
        marginVertical:10,
        color:"#1C3C5E"
    },
})
export default TaskInputContainer