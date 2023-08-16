import React, {Component} from 'react';  
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,Image} from 'react-native'; 
// import { LinearTextGradient } from 'react-native-text-gradient';
import Blog from '../Assets/Blob.png';
import kid from '../Assets/List/kids.png';
import Icon from 'react-native-vector-icons/FontAwesome';   
import { createStackNavigator, createAppContainer } from 'react-navigation';   



  
export default Register =()=> {  
  
    return (  
      <View style={styles.container}> 
      <ImageBackground source={Blog}  style={styles.bg}>
      <Image source={kid} style={styles.kid} />
       <Text style={styles.title}>PLAY-ED</Text>
       <Text style={styles.description}>Search and list kids activitiesby your zip code</Text>
       <Text style={styles.tittle2}>Register via</Text>
       <View style={styles.social}>
        <Icon name='facebook-square' size={30}  style={styles.facebook}/>
        <Icon name='google' size={30} style={styles.google} />
       </View>
</ImageBackground>
         
      </View>  
       
    );  
  }  

  
const styles = StyleSheet.create({  
  social:{
    flexDirection:'row',
    marginLeft:170,
    marginTop:40 ,

  },  
  facebook:{

    width:17,
    height:32,
    color:'#1877F2',
    paddingRight:10
  },
  google:{
    width:17,
    height:17,
    color:'#FF3D00'
  },

  title:{
    fontSize:50,
    marginTop:-10,
    marginLeft:106  ,
    justifyContent:'center',
    fontWeight:"400",
    lineHeight: 69,
    fontFamily:"comic-sans-ms",
  },
  description:{
    fontSize:16,
    marginLeft:'20%',
    marginRight:'20%',
    textAlign:'center',
    fontWeight:'700',
    color:'#000000'
    
  },
  container: {
    position: 'absolute',
   
  },
  bg:{
    marginTop:-68,
    // width:895,
    height:735,
    opacity:40
  },
  kid:{
    width:392,
    height:311,
    opacity:0.9,
    marginTop:50,
    backgroundColor:'#FEB7EB'
    },
    tittle2:{
      width:133,
      height:31,
      fontWeight:'600',
      marginTop:48,
      marginLeft:133,
      color:'#000000',
      fontSize:24
    }
 });  
  
 
 
      
     
       