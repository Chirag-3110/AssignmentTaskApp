import { View, Text, Dimensions, Animated, StyleSheet } from 'react-native'
import React,{forwardRef,useImperativeHandle} from 'react'
const {width,height}=Dimensions.get("window");

const CreateNewTask = forwardRef((props, ref) => {
    const animated = new Animated.Value(0);
    useImperativeHandle(ref, () => ({
        showPopUp() {
            Animated.spring(animated, {
                toValue: -height,
                useNativeDriver: true,
                friction:10,
            }).start();
        },
        hidePopUp(){
            Animated.timing(animated, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }));
    const hidePopUp=()=>{
        Animated.timing(animated, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }
    return (
        <Animated.View style={[{transform: [{translateY: animated}]},styles.animtedView]}>
            {
                props.children
            }
        </Animated.View>
    )
})

const styles=StyleSheet.create({
    animtedView: {
        backgroundColor:"#F2F2F2",
        width,
        alignItems: "center",
        justifyContent: "center",
        position:"absolute",
        bottom:-height,
        paddingVertical:25,
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
})
export default CreateNewTask