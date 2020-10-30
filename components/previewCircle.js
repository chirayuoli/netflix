import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'

export default function PreviewCircle({title}) {
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
        width: 90, 
        height: 90,
        borderRadius: 90/2,
        marginHorizontal:10
    }

})
