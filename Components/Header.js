import React from "react";
import { StyleSheet, Text, View} from 'react-native';  

import Icon from 'react-native-vector-icons/FontAwesome';      

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Icon style={styles.menu} name="navicon" size={30} color="#000000"/>
            
            <Text style={styles.tittle}>PLAY-ED</Text>
            <Icon style={styles.arrow} name="location-arrow" size={30} color="#000000"/>

          

            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    header:{
        justifyContent:"space-between",
        flexDirection:'row',
        },
    menu:{
        marginLeft:19,
        marginTop:21,
        
    },
    tittle:{
        fontSize:28,
        marginTop:19,
        lineHeight:39,
        fontStyle:"normal",
        // fontFamily:'Comic Sans MS',
        fontWeight:"600",
        color:'#000000',
        width:129,
        height:36
    },
    arrow:{
        
        marginRight:25,
        marginTop:21,
        color:'#000000',
        fontStyle:'Comic Sans MS'
        // height:20,
        // width:20
    }
       

})