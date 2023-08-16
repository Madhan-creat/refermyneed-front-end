import React from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'; 
import Header from "./Header"; 
import { createStackNavigator, createAppContainer } from 'react-navigation';

 Registers =()=>{
   return (
       <View>
           <View>
           <Header />
           </View>
        <View style={styles.overview}>

            <View style={styles.tittle}>
            <Text style={styles.name}>REGISTER AN EVENT</Text>
            </View>

            <View style={styles.detailview}>
                <Text style={styles.detailtext}>Enter the details to register an event</Text>
            </View>

         <View style={styles.TextInputView}>
            <TextInput
            style={styles.input}
            placeholderTextColor = "#000000"
            placeholder="NAME"
        />
        </View>
      <View style={styles.TextInputView1}>
       <TextInput
        style={styles.input}
        placeholderTextColor = "#000000"
        placeholder="NUMBER"
      />
      </View> 
      <View style={styles.TextInputView1}>
       <TextInput
        style={styles.input}
        placeholderTextColor = "#000000"
        placeholder="EMAIL"
      />
      </View>
      <View style={styles.TextInputView1}>
       <TextInput
        style={styles.input}
        placeholderTextColor = "#000000"
        placeholder="TITLE"
      />
      </View>
      <View style={styles.TextInputView1}>
       <TextInput
        style={styles.input}
        placeholderTextColor = "#000000"
        placeholder="DESCRIPTION"
      />
      </View>
      <View style={styles.TextInputView1}>
       <TextInput
        style={styles.input}
        placeholderTextColor = "#000000"
        placeholder="CATEGORY"
      />
      </View>
      <View style={styles.TextInputView1}>
       <TextInput
        style={styles.input}
        placeholderTextColor = "#000000"
        placeholder="ZIPCODE"
      />
      </View>
      <View style={styles.TextInputView1}>
       <TextInput
        style={styles.Upload}
        placeholderTextColor = "#000000"
        placeholder="UPLOAD IMAGE"
      />
      </View>


      <View>
      <TouchableOpacity style={styles.save}>
    <Text style={styles.ButtonSave}>SAVE</Text>
</TouchableOpacity>
      </View>

      
        


        </View>
       </View>
   )

}
const styles= StyleSheet.create({
    tittle:{
        marginLeft:23,
        marginTop:8,
    },
    name:{
        color:'#000000',
        width:236,
        height:28,
        fontSize:24,
        fontWeight:'600'
    },
    detailview:{
        marginLeft:22,
        marginTop:10
    },
    detailtext:{
        fontSize:16,
        fontWeight:"400",
        font:'Roboto',
        color:'#000000',
        lineHeight:19
    },
    input: {
        height: 45,
        marginLeft:22,
        marginRight:22,
        borderRadius:10,
        margin: 12,
        borderWidth: 1 ,
        borderColor:'#bdbfbe',
        
         fontSize:17 ,
         paddingLeft:20,
         placeholdercolor:'#000000',
         fontWeight:'600',
        borderTopWidth:2,
                
    },
    TextInputView:{
        marginTop:27,
    },
    TextInputView1:{
        marginTop:-13
    },
    Upload:{
        height: 45,
        marginLeft:22,
        paddingLeft:128,
        marginRight:22,
        borderRadius:10,
        margin: 12,
        borderWidth: 1 ,
        borderColor:'#bdbfbe',
        fontSize:17 ,
        placeholdercolor:'#000000',
        fontWeight:'600',
        borderTopWidth:2,

    },
    save:{
        width: 410,
        height:55   ,
        borderRadius:8,
        backgroundColor: '#FFD3F3',
        alignItems:'center',
        marginLeft:21,
        marginRight:21,
        // marginTop:37,
        borderRadius:7,
    },
    ButtonSave:{
        width:45,
        height:20,
        marginTop:20,
        marginLeft:172,
        marginRight:174,
        marginBottom:10,
        fontSize:16,
        fontWeight:"600"


    }
        
        

     

})
export default Registers;
