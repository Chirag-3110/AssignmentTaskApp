import { View, Text } from 'react-native'
import React from 'react'

const TitleDesc = ({title,value,fontsize,fontweight}) => {
    return (
        <View>
            <Text style={{color:"grey",fontWeight:"600",fontSize:17,paddingHorizontal:20,marginTop:10}}>
                {title}
            </Text>
            <Text style={{color:"black",fontWeight:fontweight,paddingHorizontal:20,fontSize:fontsize,marginTop:10}}>
                {value}
            </Text>
        </View>
    )
}

export default TitleDesc