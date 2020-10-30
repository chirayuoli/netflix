import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import Coming from '../components/Coming';

export default function ComingSoon() {
    return (
        <View style={styles.comingsoon}>
            <View style={styles.header}>
                <FontAwesome style={{left:5}} name="bell-o" size={22} color="white" />                
                <Text style={styles.title}> Notifications</Text>
                <FontAwesome style={{left:260}} name="chevron-right" size={18} color="white" />
            </View>
            <View style={styles.coming}>
                    <ScrollView>
                        <Coming title="https://picsum.photos/id/43/412/220"/>
                        <Coming title="https://picsum.photos/id/68/412/220"/>
                        <Coming title="https://picsum.photos/id/13/412/220"/>
                        <Coming title="https://picsum.photos/id/99/412/220"/>
                        <Coming title="https://picsum.photos/id/106/412/220"/>
                        <Coming title="https://picsum.photos/id/248/412/220"/>
                    </ScrollView>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    comingsoon:{
        backgroundColor:'black',
        flex:1,
    },
    header:{
        top:20,
        flexDirection:'row',
        height:50,
        alignItems:'center',
    },
    title:{
        color:'white',
        left:15,
        fontSize: 15
    },
    coming:{
        top:15
    }
});