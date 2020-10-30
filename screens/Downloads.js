import React from 'react'
import { View, Text,StyleSheet, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Downloads() {
    return (
        <View style={styles.main}>

            <View style={{flexDirection:'row',top: 28, alignSelf:'flex-start'}}>
                <MaterialIcons style={{left:10}}name="info-outline" color='white' size={20} />
                <Text style={{color:"#cccccc", left:15, fontSize:14}}>Smart Downloads</Text>
                <TouchableOpacity style={{left:20}}>
                    <Text style={{color:"#187bcd",fontWeight:'700', fontSize:16}}>ON</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.iconBox}>
                <MaterialIcons style={styles.icon}name="file-download" size={120} />
            </View>

            <View style={styles.text}>
                <Text style={{color:'#cccccc',fontSize:20,}}>Movies and TV shows that you</Text>
                <Text  style={{color:'#cccccc',fontSize:20,}}>download appear here.</Text>
            </View>

            <View style={styles.button}>
                <Text style={{fontWeight:'700',fontSize:16.5}}>Find Something to Download</Text>
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
        height:170,
        width:170,
        borderRadius:170/2,
        backgroundColor:'#333333',
      
    },
    icon:{
        color:'black',
        top:28,
        alignSelf:'center',
    },
    text:{
        top:210,
        alignSelf:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'white',
        paddingVertical:8,
        paddingHorizontal:11,
        top:320
    }
    
})
