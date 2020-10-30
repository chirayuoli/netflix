import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'

export default function NewRelease({title}) {
    return (
        <TouchableOpacity style={styles.image}>
        <Image resizeMode='cover'
        source={{uri:title}}
        style={styles.image}
        />
        {/* <Text 
        style={{fontSize:13,color:'white',alignSelf:'center', left:14,top:20}}
        >Movie Name
        </Text> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 150, 
        height: 300,
        borderRadius:5,
        marginHorizontal:10
    }

})
