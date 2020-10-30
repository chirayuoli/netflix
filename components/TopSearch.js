import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 

export default function NewRelease({title}) {
    return (
        <TouchableOpacity style={styles.search}>
        <Image resizeMode='cover'
        source={{uri:title}}
        style={styles.image}
        />
        <Text 
        style={styles.text}
        >Movie Name
        </Text>
        <MaterialIcons style={styles.icon} name="play-circle-outline" size={30} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    search:{
      flexDirection:'row',
      marginVertical:1,
      backgroundColor:'#222222',
    },
    image:{
        width: 135, 
        height: 80,
    },
    text:{
        fontSize:16,
        color:'white',
        alignSelf:'center',
        left:10,
    },
    icon:{
        alignSelf:'center',
        left:130
    }

})
