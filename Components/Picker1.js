import React, { useState } from "react";
import { View ,Text} from "react-native";
import Picker from '@react-native-community/picker';
// import {Picker} from '@react-native-picker/picker';
 function Picker1(){
    const [selectedLanguage, setSelectedLanguage] = useState();
    return(
        <View>
        <Text>{selectedLanguage}</Text>
        <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    );
}
export default Picker1;