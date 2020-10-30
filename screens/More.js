import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Profiles from '../components/profiles'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';

export default function More() {
    return (
        <View style={{flex:1, backgroundColor:'black',flexDirection:'column'}}>
            
            <View style={styles.profile}>
                <Profiles user='Ramesh' he={60} wd={60} col='#888888' photo= {require("../assets/n1.png")}/>
                <Profiles user='Suresh' he={60} wd={60} col='#888888' photo= {require("../assets/n2.png")}/>
                <Profiles user='Ganesh' he={70} wd={70} col='white' photo= {require("../assets/n3.png")}/>
                <Profiles user='Sita' he={60} wd={60} col='#888888' photo= {require("../assets/n6.png")}/>
                <Profiles user='Gita' he={60} wd={60} col='#888888' photo= {require("../assets/n5.jpg")}/>
            </View>
            
            <View style={{flexDirection:'row',top:30,paddingBottom:20,alignItems:'center',alignSelf:'center'}}>
                <MaterialIcons name="edit" size={18} color="#bbbbbb" />
                <Text style={{color:'#bbbbbb', left:8}}>Manage Profiles</Text>
            </View>
            
            <View style={{top:25,paddingBottom:10,left:10,flexDirection:'row'}}>
                <Ionicons name="md-checkmark" size={22} color="#dddddd" />
                <Text style={{color:'#bbbbbb', left:20,fontSize:16}}>My List</Text>
            </View>
            <View  style={{borderBottomColor: 'grey',borderBottomWidth:1, top:25,opacity:0.4, }}></View>


            <View>
                <Text style={[{paddingTop:25},styles.text]}>App Settings</Text>
                <Text style={styles.text}>Account</Text>
                <Text style={styles.text}>Help</Text>
                <Text style={styles.text}>Sign Out</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        color:'#bbbbbb',
        marginVertical:10,
        left:10,
        fontSize:20
    },
    profile:{
        flexDirection:'row',
        top:20,
    }
})

