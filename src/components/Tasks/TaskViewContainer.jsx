import { View, Text } from 'react-native'
import React from 'react'
import TitleDesc from '../TitleDesc'
import { useSelector } from 'react-redux';

const TaskViewContainer = () => {
    const  {selectedTaskTitle,selectedTaskDesc}  = useSelector(state => state.tash);
    return (
        <View>
            <Text style={{color:"black",fontWeight:"700",fontSize:20,textAlign:"center",padding:20}}>Task Details</Text>
            {[
                selectedTaskDesc && selectedTaskTitle ?
                <View>
                    <TitleDesc title={"Task Title"} value={selectedTaskTitle} fontsize={22} fontweight={"bold"} />
                    <TitleDesc 
                        fontweight={"600"}
                        fontsize={15}
                        title={"Description"} 
                        value={selectedTaskDesc} 
                    />
                </View>:
                <Text style={{color:"grey",fontWeight:"700",fontSize:20,textAlign:"left",padding:20}}>
                    No Task Selected
                </Text>
            ]}
        </View>
    )
}

export default TaskViewContainer