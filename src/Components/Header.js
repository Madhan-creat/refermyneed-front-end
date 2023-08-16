/* eslint-disable react/react-in-jsx-scope */
import {Center} from 'native-base';
import {View, StyleSheet, Text} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign/';
import {useNavigation} from '@react-navigation/native';
const Headers = ({left = '', title = '', right = '', goBack = ''}) => {
  const navigation = useNavigation();
  const goback = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <Header
        backgroundColor="#0b283b"
        placement="left"
        leftComponent={
          <Icon
            name={left}
            size={30}
            color="#fff"
            style={{marginTop: 5}}
            onPress={goback}
          />
        }
        centerComponent={<Text style={styles.title}> {title}</Text>}
        // rightComponent={{icon: {right}, color: '#fff'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    alignSelf: 'center',
    top: 5,
    fontWeight: 'medium',
    color: '#F5FCFF',
    right: 10,
  },
});
export default Headers;
