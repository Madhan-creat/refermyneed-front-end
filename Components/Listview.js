import React from "react";
import { View,StyleSheet,Text,Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import list1 from '../Assets/List/List1.png';
import list2 from '../Assets/List/List2.png';
import list3 from '../Assets/List/List3.png';
import list4 from '../Assets/List/List4.png';
import list5 from '../Assets/List/List5.png';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const List =[
    {
        img:list1,
        name:'K.A.Cricket ',
        description:'Below Under -19  cricket coaching in kovaipudur'
       },
       {
        img:list2,
        name:'J.J.Cricket ',
        description:'cricket coaching in kovaipudur'
        },
        {
        img:list3,
        name:'Cricket Acadamy',
        description:'Below Under -19  cricket coaching in kovaipudur'
      },
      {
        img:list4,
        name:'ABC cricket',
        description:'cricket coaching in Town hall'
      },
      {
        img:list5,
        name:'Cricket coaching',
        description:'Indoor  cricket coaching in kovaipudur'
      },
]
export default Listview=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
               <Icon style={styles.menu} name="navicon" size={30} color="#000000"/>
               <Text style={styles.headling}>Top Best Cricket Acadamys</Text>
            </View>
            
                {
                    List.map((item,id)=>{
                        return(
                            <View key={id} style={styles.card}>
                                <View  style={styles.Imageview}>
                                    <Image style={styles.Image} source={item.img} />
                                </View>

                               <View style={styles.textview}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                               </View>

                            </View>
                        )
                    })
                }

        </View>
    );
}
const styles= StyleSheet.create({
    menu:{
        marginLeft:12,
        marginTop:20,
    },
    header:{
        flexDirection:'row',
    },
    headling:{
        marginTop:33,
        marginLeft:20,
        flex:1,
        fontSize:24,
        marginTop:21,
        lineHeight:32,
        fontStyle:"normal",
        // fontFamily:'Comic Sans MS',
        fontWeight:"700",
        color:'#000000',
        width:325,
        height:30
    },
    card:{
        flexDirection:'row',
        borderWidth:1,
        width:373,
        height:143,
        marginLeft:16,
        marginRight:19,
        borderRadius:16,
        borderColor:'#00000026',
        marginBottom:18
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
    container:{
        backgroundColor:'#ffff'
    }


        
})
                              
