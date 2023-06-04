import { View, Text } from 'react-native'
import React from 'react'
import TitleDesc from '../TitleDesc'

const TaskViewContainer = () => {
    return (
        <View>
            <Text style={{color:"black",fontWeight:"700",fontSize:20,textAlign:"center",padding:20}}>Task Details</Text>
            <TitleDesc title={"Tast Title"} value={"NFT Web App Prototype"} fontsize={22} fontweight={"bold"} />
            <TitleDesc 
            fontweight={"600"}
            fontsize={15}
            title={"Descriptions"} 
            value={"Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week - with NFT.."} 
            />
        </View>
    )
}

export default TaskViewContainer