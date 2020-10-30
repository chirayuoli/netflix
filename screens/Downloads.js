import React from 'react'
import { View, Text,StyleSheet, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


export default function Downloads() {
    return (
        <View style={styles.main}>

            <View style={styles.iconBox}>
                <MaterialIcons style={styles.icon}name="file-download" size={150} />
            </View>

            <View style={styles.text}>
                <Text style={{color:'#cccccc',fontSize:20,}}>Movies and TV shows that you</Text>
                <Text  style={{color:'#cccccc',fontSize:20,}}>download appear here.</Text>
            </View>

            <View style={styles.button}>
                <Text style={{fontWeight:'700',fontSize:18}}>Find Something to Download</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'black',
        flexDirection:'column',
        alignItems:'center',

    },
    iconBox:{
        top:170,
        height:200,
        width:200,
        borderRadius:100,
        backgroundColor:'#333333',
      
    },
    icon:{
        color:'black',
        top:26,
        alignSelf:'center',
    },
    text:{
        top:210,
        alignSelf:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'white',
        paddingVertical:5,
        paddingHorizontal:11,
        top:320
    }
    
})
