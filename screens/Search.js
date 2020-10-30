import React from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';
import TopSearch from '../components/TopSearch';


export default function Search() {
    return (
        <View style={{flex:1,backgroundColor:'black'}}>
            <View style={styles.header}>
                <MaterialIcons name="search" size={24} color="#999999" />
                
                <TextInput 
                    placeholder={"Search for a show, movie, genre, etc."}
                    style={styles.textInput}
                    placeholderTextColor='#999999'
                    selectionColor='#E50914'
                    caretHidden={true}
                    multiline
                />
                
                <MaterialIcons name="mic" size={24} color="#999999" />
            </View>

            <View style={styles.topSearches}>
                    <Text 
                    style={styles.title}>Top Searches</Text>
                    <ScrollView >
                        <TopSearch title="https://picsum.photos/id/23/135/80"/>
                        <TopSearch title="https://picsum.photos/id/53/135/80"/>
                        <TopSearch title="https://picsum.photos/id/62/135/80"/>
                        <TopSearch title="https://picsum.photos/id/83/135/80"/>
                        <TopSearch title="https://picsum.photos/id/75/135/80"/>
                        <TopSearch title="https://picsum.photos/id/24/135/80"/>
                        <TopSearch title="https://picsum.photos/id/17/135/80"/>
                        <TopSearch title="https://picsum.photos/id/12/135/80"/>
                        <TopSearch title="https://picsum.photos/id/51/135/80"/>
                        <TopSearch title="https://picsum.photos/id/77/135/80"/>
                    </ScrollView>
                </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        paddingHorizontal:15,
        marginHorizontal:5,
        marginRight:5,
        top:20,
        alignItems:'center',
        backgroundColor: '#333333',
        height:50,
    },
    textInput:{
        left:5,
        paddingRight:10,
        paddingLeft:10,
        color:'white',
        flex:1,
        flexWrap: "wrap",
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        paddingVertical:20,
        marginHorizontal:10
    },
    topSearches:{
        top:15,
        flex:1,
        flexDirection:'column',
    },
})
