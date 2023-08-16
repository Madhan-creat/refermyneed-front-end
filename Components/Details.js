import React from "react";
import Header from "./Header";
import { View,StyleSheet,Text,Image, ScrollView } from "react-native";
import list1 from '../Assets/List/List1.png';
// import Icon from 'react-native-vector-icons/FontAwesome';  
import whatapp from '../Assets/List/whatapp.png' ;
import call from '../Assets/List/call.png';
import Icon from 'react-native-vector-icons/FontAwesome';    
import { createStackNavigator, createAppContainer } from 'react-navigation';  






export default Details=() =>{
    return( 
        <ScrollView>
            <View style={styles.container}>
         <View >
            <View style={styles.header}>
                    <Header/>
                </View>
                <View style={styles.card}>
                    <View  style={styles.Imageview}>
                        <Image style={styles.Image} source={list1} />
                    </View>
                <View style={styles.textview}>
                    <Text style={styles.nameText}>K.A.Cricket </Text>
                    <Text style={styles.description}>
                    Below Under -19  cricket coaching inkovaipudur
                    </Text>
                </View>
            </View>

        </View>
        <View  style={styles.details}>
            <View style={styles.contants}>
            <View >
                <Text style={styles.Acadamy}>K.A cricket  acadamy </Text>
            </View>
            <View>
                <Text style={styles.des1}>
                KA cricket acadamy in coimbatore is one of the leading business in the football coaching . 
                 </Text>
            </View>
            <View>
                <Text style={styles.des2}>
                Cricketl coaching ground undertaken by KA cricket acadamy
                 </Text>
            </View>
            <View>
                <Text style={styles.des3}>
                Open= 6am - 10am , 4pm - 11pm
                 </Text>
            </View>
            <View>
                <Text style={styles.des4}>Fees - 3 months $200</Text>
                <Text style={styles.des5}> 6 months $400</Text>
                <Text style={styles.des5}> 9 months $600</Text>
                <Text style={styles.des5}> 1year $800</Text>
                <Text style={styles.des6}  >For both boys and girls</Text>   
            </View>
            <View style={styles.social}>
            <Image style={styles.whatapp} source={whatapp} />
            <Image style={styles.phone} source={call} />
            <Icon style={styles.arrow} name="location-arrow" size={30} color="#000000"/>

            {/* <Icon name="whatsapp" size={50} color=""/>
            <Icon name="phone" size={} color=""/>
            <Icon name="" size={} color=""/> */}


        </View>
            </View>
        </View>

        </View>
        </ScrollView>
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#fff'

    },
     card:{
        flexDirection:'row',
        borderWidth:1,
        width:373,
        height:143,
        marginLeft:16,
        marginRight:21,
        borderRadius:16,
        borderColor:'#FF008A8C',
        marginBottom:18,
        marginTop:30,
        // backgroundColor:'#fff'
    },
    Imageview:{
        marginLeft:5,
        marginTop:7,
        marginBottom:11,
    },
    Image:{
        width:160,
        height:110

    },
    textview:{
        marginLeft:43,
        marginTop:29,
    },
    nameText:{
        fontSize:14.74,
        fontWeight:'700',
        fontFamily:'Roboto',
        color:'#000000'
    },
    description:{
        fontSize:12.18,
        fontWeight:'300',
        fontStyle:'Roboto',
        fontFamily:'Roboto',
        color:'#000000',
        width:140,
        marginRight:44,
        marginTop:9
    },
   details:{
    marginTop:80,
    backgroundColor:'#fff'
    
   },
   contants:{
    backgroundColor:'#FFD3F3',
    borderRadius:20,
    width:391,
    height:595,
   },
   Acadamy:{
    marginTop:20,
    marginLeft:31,
    fontSize:18,
    fontWeight:'700',
    color:'#000000',
    fontFamily:'Roboto',
    lineHeight:22
   },
   des1:{
    width:286,
    height:57   ,
    marginTop:20,
    marginLeft:26,
    marginRight:116,
    // marginBottom:26, 
    fontSize:16,
    fontWeight:'700',
    color:'#000000',
    fontFamily:'Roboto',
    lineHeight:18
},
des2:{
    width:286,
    height:38   ,
    marginTop:20,
    marginLeft:26,
    marginRight:116,
    // marginBottom:26, 
    fontSize:16,
    fontWeight:'700',
    color:'#000000',
    fontFamily:'Roboto',
    lineHeight:18.75
},
des3:{
    width:288,
    height:21,
    marginTop:28,
    marginLeft:28,
    // marginRight:116,
    // marginBottom:26, 
    fontSize:18,
    fontWeight:'700',
    color:'#000000',
    fontFamily:'Roboto',
    lineHeight:21.75
},
des4:{
    width:188,
    height:21,
    marginTop:23,
    marginLeft:28,
    // marginRight:116,
    // marginBottom:26, 
    fontSize:18,
    fontWeight:'700',
    color:'#000000',
    fontFamily:'Roboto',
    lineHeight:21.75
},
des5:{
    width:188,
    height:21,
    marginTop:1,
    marginLeft:77,
    // marginRight:116,
    // marginBottom:26, 
    fontSize:18,
    fontWeight:'700',
    color:'#000000',
    fontFamily:'Roboto',
    lineHeight:21.75
},
des6:{
    width:188,
    height:21,
    // marginTop:23,
    marginLeft:28,
    // marginRight:116,
    // marginBottom:26, 
    fontSize:18,
    fontWeight:'700',
    color:'#000000',
    fontFamily:'Roboto',
    lineHeight:21.75

},
whatapp:{
    width:50,
    height:54
},
navi:{
    width:35,
    height:35,
    color:'#036C8D'
},
phone:{
    width:40,
    height:40
},
social:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:52,
    marginBottom:50
}




})
