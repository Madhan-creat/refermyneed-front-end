import React from "react";
import Header from "./Header";
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,FlatList, ScrollView   } from 'react-native'; 
import Icon from 'react-native-vector-icons/AntDesign'; 
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
import sport1 from '../Assets/sport1.png';
import sport2 from '../Assets/sport2.png';
import sport3 from '../Assets/sport1.png';
import music1 from '../Assets/music1.png';
import music2 from '../Assets/music2.png';
import music3 from '../Assets/music1.png';
import { createStackNavigator, createAppContainer } from 'react-navigation';








const category=[
    {
    img:img1,
    name:'Online'
    },
    {
    img:img2,
    name:'inPerson'
    },
    {
    img:img3,
    name:'Indoor'
    },
    {
    img:img4,
    name:'Outdoor'
    }
];
const Sport=[
    {
        img:sport1,
        name:'Cricket',
        description:'Below Under -19  cricket coaching in kovaipudur'},
       {
        img:sport2,
        name:'Billiards',
        description:'Billiards and all indoor games for all ages'
        },
        {
        img:sport3,
        name:'Cricket',
        description:'Below Under kovaipudur'
      },
];
const Music =[
       {
        img:music1,
        name:'Guitar',
        description:'Guiter coaching class'
       },
       {
        img:music2,
        name:'Piano Class',
        description:'Piano class for kids'
        },
        {
        img:music3,
        name:'Guitar',
        description:'Guiter coaching class'
      },
    ]






  



export default Home =()=>{
    return(
        <View>

        <View style={styles.header}>
        <Header />
        </View>
        <View style={styles.searchView}>
            <Icon name="search1" size={18} style={styles.searchicon}/>
            <TextInput 
            style={styles.search}
            placeholder="Type Your Keyword e.g..music classes.. "
            />
        </View>
        
        <ScrollView vertically={true}>
        <View style={styles.heading1view} >
            <Text style={styles.heading1}>Exolpre by Categories</Text>
        </View>
        <ScrollView  horizontal={true} style={styles.container}>  
      <View style={styles.category}> 
      {category.map((item,id) => {
        return (
          <View key={id}>
          <View  style={styles.category1}>

              <Image source={item.img} />
          </View>
           
            <View style={styles.textView}>
             <Text style={styles.imageText}>{item.name}</Text>
            </View>
          </View>
        );
      })}
      </View>
      </ScrollView>
      <View style={styles.eventTittleview}>
            <Text style={styles.heading1}>Nearby Top Events</Text>
        </View>
        <View style={styles.sportTittle}>
            <Text style={styles.sport}>Sports</Text>
            <Text style={styles.see}>See More</Text>
        </View>
        <ScrollView horizontal={true}>
        <View style={styles.sportcontainer}>
        {Sport.map((item,id) => {
        return (
          <View key={id}>
          <View  style={styles.sport1}>
              <Image style={styles.sportImage} source={item.img} />
          </View>
            <View style={styles.textView}>
             <Text style={styles.sportText}>{item.name}</Text>
             <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        );
      })}
        </View>
        </ScrollView>
        <View style={styles.sportTittle}>
            <Text style={styles.sport}>Music</Text>
            <Text style={styles.see}>See More</Text>
        </View>


        <ScrollView horizontal={true}>
        <View style={styles.sportcontainer}>
        {Music.map((item,id) => {
        return (
          <View key={id}>
          <View  style={styles.sport1}>
              <Image style={styles.sportImage} source={item.img} />
          </View>
            <View style={styles.textView}>
             <Text style={styles.sportText}>{item.name}</Text>
             <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        );
      })}
        </View>
        </ScrollView>


            
     


           



         </ScrollView>
        </View>
    );

}


              
            
     
            
const styles=StyleSheet.create({
    searchView:{
       
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth:2,
    width:350,
    height:35,
    marginLeft:23,
    marginRight:15,
    borderRadius:8,
    marginTop:30
},
searchicon:{
    width:16,
    height:16,
    marginLeft:8,
    color:'#000000'
},
    
search:{
    color:'#000',
    fontFamily:'Nunito',
    fontStyle:'Nunito',
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 8,
    paddingLeft: 12,
    fontSize:12,
    fontWeight:'700',
},
heading1:{
    width:210,
    height:27,
    fontSize:20,
    lineHeight:27,
    fontFamily:'Nunito',
    fontWeight:'700',
    color:'#000000'
},
heading1view:{
    marginTop:45,
    marginLeft:15,
    marginRight:203
},
imageview:{
    width:98,
    height:50
},
category:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:38,
     paddingLeft:8
},
sportcontainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:15,
},
sportImage:{
    position:'relative',
    width:130,
    height:130,
    marginLeft:17,
    paddingRight:30
    // marginTop:15
},

category1:{
    width:100,
    height:56,
    marginRight:22
},
textView:{
    marginTop:18,
    marginLeft:20
},
imageText:{
    // width:37,
    height:16,
    fontSize:12,
    fontWeight:'700',
    fontStyle:'Nunito',
    // marginRight:76
},
eventTittleview:{
    marginTop:48,
    marginLeft:15,
    marginRight:237
},
sportTittle:{
    marginTop:20,
    justifyContent:'space-between',
    flexDirection:'row'
      
},
sport:{
    marginLeft:15,
    fontSize:16,
    color:'#000000',
    fontWeight:'700',
    width:72,
    height:20,
    // marginTop:-10
},
see:{
    marginRight:11,
    fontSize:12,
    color:'#000000',
    fontWeight:'700',
    width:54,
    height:16,
},
description:{
    width:130,
    fontSize:8,
    fontWeight:"400",
    fontFamily:'Roboto',
    color:'#000000',
    height:34
},
sportText:{
    fontSize:14.54,
    fontWeight:'500',
    marginTop:-20,
    color:'#000000',
    height:17,
},
header:{
    marginTop:-20
}


})
    


    
   




       
        
