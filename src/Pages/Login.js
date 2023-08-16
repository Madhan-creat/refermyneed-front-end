import React, {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Yup from 'yup';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const schema = Yup.object().shape({
  email: Yup.string().email().required('*fill the black'),
  password: Yup.string()
    .required('*fill the black')
    .min(4, '*Min 4 Letter Required'),
});
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const loginData = {
    email: email,
    password: password,
  };
  console.log(loginData);
  console.log(errors);
  const onhandleLogin = async () => {
    try {
      await schema.validate(loginData, {abortEarly: false});
      await axios
        .post('http://192.168.1.13:4000/api/v1/user/login', loginData)
        .then(async res => {
          const token = res.data.result.token;
          const user_id = res.data.result.user_id;
          console.log(token);
          console.log(user_id);
          await AsyncStorage.setItem('token', token);
          await AsyncStorage.setItem('user_id', user_id);

          navigation.navigate('MyTabs');
          setErrors({});
          setPassword('');
          setEmail('');
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      const errors = {};
      err.inner.forEach(e => {
        errors[e.path] = e.message;
      });
      setErrors(errors);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.LogoVIew}>
          <Image
            style={styles.Logo}
            source={require('/home/madan/Turnkey/first/src/Assets/Images/refer.jpeg')}
          />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Welcome Back !</Text>
        </View>
        <Text style={styles.title1}>Login to continue</Text>
        <View style={styles.inputView}>
          {errors.email && <Text style={styles.errors}>{errors.email}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          {errors.password && (
            <Text style={styles.errors}>{errors.password}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Text style={styles.forgotpwd}>Forget Password ?</Text>
        <View style={styles.typeBtn}>
          <TouchableOpacity style={styles.submit} onPress={onhandleLogin}>
            <Text style={styles.type}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={styles.regLink}
          onPress={() => navigation.navigate('Register')}>
          create Account ?
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};
// () => navigation.navigate('MyTabs');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101721',
  },
  Logo: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  LogoVIew: {
    alignSelf: 'center',
    marginTop: '45%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#999e9d',
  },
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2a6b62',
    alignSelf: 'center',
  },
  titleView: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  errors: {
    color: '#8c0d01',
    marginLeft: 15,
  },
  input: {
    height: 40,
    width: '94%',
    borderColor: '#999e9d',
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: '3%',
    color: '#999e9d',
    fontSize: 15,
    fontWeight: '500',
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999e9d',
  },
  inputView: {
    marginTop: '10%',
  },
  forgotpwd: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#999e9d',
    alignSelf: 'center',
    marginTop: '3%',
    textDecorationLine: 'underline',
  },
  submit: {
    width: '94%',
    alignItems: 'center',
    backgroundColor: '#2a6b62',
    padding: 10,
    marginHorizontal: '3%',
    marginTop: '8%',
  },
  regLink: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#999e9d',
    alignSelf: 'center',
    marginTop: '15%',
    textDecorationLine: 'underline',
  },
});

export default Login;
