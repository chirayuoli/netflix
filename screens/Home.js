import React from 'react'
import { View, Text,StyleSheet, ImageBackground, Button, Image } from 'react-native'
import { Fontisto } from '@expo/vector-icons'; 
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PreviewCircle from '../components/previewCircle';
import NewRelease from '../components/NewReleases';
import Originals from '../components/Originals';

export default function Home() {
    return (
        <ScrollView style={{backgroundColor:'black',flexDirection:'column'}}>
                
                <ImageBackground 
                    style={{height:450,width:'100%'}}
                    resizeMode='cover'
                    source={require('../assets/mov1.jpg'
                )}>
                    <View style={styles.header}>
                    <Fontisto name="netflix" size={40} color="#E50914"/>
                    
                    <TouchableOpacity style={{paddingHorizontal:35}}>
                        <Text style={{color:'white'}}>TV Shows</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingHorizontal:35}}>
                        <Text  style={{color:'white'}}>Movies</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingHorizontal:35}}>
                        <Text  style={{color:'white'}}>My List</Text>
                    </TouchableOpacity>
                    </View>
              
                </ImageBackground>

                <View style={styles.preview}>
                    <Text style={styles.title}>Previews</Text>
                    <ScrollView horizontal>
                        <PreviewCircle title="https://picsum.photos/id/43/80/90"/>
                        <PreviewCircle title="https://picsum.photos/id/68/80/90"/>
                        <PreviewCircle title="https://picsum.photos/id/13/80/90"/>
                        <PreviewCircle title="https://picsum.photos/id/99/80/90"/>
                        <PreviewCircle title="https://picsum.photos/id/106/80/90"/>
                        <PreviewCircle title="https://picsum.photos/id/248/80/90"/>
                    </ScrollView>
                </View>

                <View style={styles.newReleases}>
                    <Text 
                    style={styles.title}>New Releases</Text>
                    <ScrollView horizontal>
                        <NewRelease title="https://picsum.photos/id/25/90/150"/>
                        <NewRelease title="https://picsum.photos/id/52/90/150"/>
                        <NewRelease title="https://picsum.photos/id/62/90/150"/>
                        <NewRelease title="https://picsum.photos/id/18/90/150"/>
                        <NewRelease title="https://picsum.photos/id/93/90/150"/>
                    </ScrollView>
                </View>
                <View style={styles.newReleases}>
                    <Text 
                    style={styles.title}>Trending</Text>
                    <ScrollView horizontal>
                        <NewRelease title="https://picsum.photos/id/24/90/150"/>
                        <NewRelease title="https://picsum.photos/id/17/90/150"/>
                        <NewRelease title="https://picsum.photos/id/12/90/150"/>
                        <NewRelease title="https://picsum.photos/id/51/90/150"/>
                        <NewRelease title="https://picsum.photos/id/47/90/150"/>
                    </ScrollView>
                </View>
                <View style={styles.originals}>
                    <Text 
                    style={styles.title}>Netflix Originals</Text>
                    <ScrollView horizontal>
                        <Originals title="https://picsum.photos/id/54/150/300"/>
                        <Originals title="https://picsum.photos/id/163/150/300"/>
                        <Originals title="https://picsum.photos/id/185/150/300"/>
                        <Originals title="https://picsum.photos/id/258/150/300"/>
                        <Originals title="https://picsum.photos/id/281/150/300"/>
                    </ScrollView>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        paddingHorizontal:20,
        top:35,
        alignItems:'center'
    },
    preview:{
        flexDirection:'column',
        height:150,
    },
    image:{
        width: 70, 
        height: 70,
        borderRadius: 70/2,
        
    },
    newReleases:{
        flexDirection:'column',
        height:210,
    },
    originals:{
        flexDirection:'column',
        height:370,
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        paddingVertical:10,
        marginHorizontal:10
    }

})
