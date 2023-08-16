import React, {Component} from 'react';  
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,Image,TextInput} from 'react-native'; 
// import { LinearTextGradient } from 'react-native-text-gradient';
import Blog from '../Assets/Blob.png';
import kid from '../Assets/List/kids.png';
import { createStackNavigator, createAppContainer } from 'react-navigation';



  
export default  Login1 =()=> {  
  
    return (  
      <View style={styles.container}> 
      <ImageBackground source={Blog}  style={styles.bg}>
      <Image source={kid} style={styles.kid} />
       <Text style={styles.title}>PLAY-ED</Text>
       <Text style={styles.description}>Search and list kids activitiesby your zip code</Text>
       <View style={styles.inputview}>
        <TextInput
         style={styles.input}
         placeholder="Enter zip Code"
        />
       </View>
       <View style={{
        width: 125,
        height:48,
        borderRadius:8,
        backgroundColor: '#FF008A',
        alignItems:'center',
        padding:(12, 16, 12, 16 ),
        marginLeft:140,
        marginTop:40

      }} >

       <TouchableOpacity>
       <Text style={{color:'#FFFBFB',fontWeight:'bold',lineHeight:20}}>CONTINUE</Text>
     </TouchableOpacity>
    <View>
  </View>
 </View>
</ImageBackground>
         
      </View>  
       
    );  
  }  

  
const styles = StyleSheet.create({  
  title:{
    fontSize:50,
    marginTop:40,
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
  button1:{
    width:93,
    height:24
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
    input: {
      height: 40,
      margin: 10,
      borderWidth: 0,
      padding: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      marginLeft:"25%",
      marginRight:"20%",
      paddingLeft:'5%',
      fontWeight:'600',
      fontSize:16,
     marginTop:'5%'
  
  },
 });  
  

 