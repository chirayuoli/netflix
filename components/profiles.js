import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

export default function Profiles({user,col,photo,he,wd}) {
    return (
        <View style={styles.profile}>
            <Image style={[{height:he,width:wd},styles.image]} source={photo}/>
            <Text style={[{color:col},styles.user]}>{user}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profile:{
        flexDirection:'column',
        alignItems:'center',
        padding:10,
    },
    image:{
        borderRadius:7,
    },
    user:{
        fontSize:13,
    }
})
