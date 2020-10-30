import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Coming({title}) {
    return (
        <View style={styles.overall}>
            <Image resizeMode='cover' source={{uri:title}} style={styles.image}/>
            <View style={styles.header}>
                <Image resizeMode='cover' source={{uri:title}} style={styles.avatar}/>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.inbuttons}>
                    <FontAwesome name="bell" size={18} color="white" />
                        <Text style={styles.btnText}>Remind Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inbuttons}>
                        <FontAwesome name="share-alt" size={18} color="white" />
                        <Text style={styles.btnText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.write}>
                <Text style={{color:'grey'}}>Coming Date</Text>
                <Text style={{color: 'white', fontSize:19, fontWeight:'bold',top:4}}>Movie Title</Text>
                <Text style={{ color: 'grey', top:10}}>This is the movie description.This is the movie description.This is the movie description.This is the movie description.This is the movie description.This is the movie description.This is the movie description.This is the movie description.</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    overall:{
        height:450,
        flex:1,
        flexDirection:'column',
        top:30
    },
    image:{
        width: 412,
        height: 220,
    },
    header:{
        top:20,
        flexDirection:'row'
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius:25,
        left: 7,
    },
    buttons:{
        left: 230,
        flexDirection:'row',
        alignItems:'center'
    },
    inbuttons:{
        alignItems:'center',
        right: 10,
        paddingVertical:10,
        paddingHorizontal:12,
    },
    btnText:{
        color:'white',
        fontSize:12,
        top: 5
    },
    write:{
        flexDirection:'column',
        top: 33,
        paddingHorizontal:5,
    }

})
