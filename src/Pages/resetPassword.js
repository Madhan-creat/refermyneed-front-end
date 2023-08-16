/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import Headers from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Yup from 'yup';
const schema = Yup.object().shape({
  name: Yup.string().required('*fill the black'),
  email: Yup.string().email().required('*fill the black'),
  password: Yup.string()
    .required('*fill the black')
    .min(4, '*Min 4 Letter Required'),
});
const PasswordReset = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const PasswordResetData = {
    name: name,
    email: email,
    password: password,
  };
  console.log(PasswordResetData);
  const onhandleReset = async () => {
    try {
      await schema.validate(PasswordResetData, {abortEarly: false});
      const user_id = await AsyncStorage.getItem('user_id');
      await axios
        .put(
          `http://192.168.1.13:4000/api/v1/user/update/${user_id}`,
          PasswordResetData,
        )
        .then(res => {
          console.log(res);
          Alert.alert('Edit Your Profile', 'Your data is saved', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          setEmail('');
          setName('');
          setPassword('');
          setErrors({});
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
      <Headers left="arrowleft" title="Edit Your Profile " />
      <View style={{top: '1%'}}>
        <Text style={styles.name}>Enter Your Email</Text>
        {errors.email && <Text style={styles.errors}>{errors.email}</Text>}
        <TextInput
          style={styles.input}
          placeholder=" Email"
          placeholderTextColor="#737373"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View>
        <Text style={styles.name}>Enter Your New Name</Text>
        {errors.name && <Text style={styles.errors}>{errors.name}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Full Name "
          placeholderTextColor="#737373"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View>
        <Text style={styles.name}>Enter Your New Password</Text>
        {errors.password && (
          <Text style={styles.errors}>{errors.password}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#737373"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.submit} onPress={onhandleReset}>
          <Text style={styles.post}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
  },
  input: {
    height: 45,
    width: '90%',
    borderColor: '#29475c',
    borderWidth: 0.8,
    marginBottom: 10,
    marginHorizontal: '5%',
    color: '#737373',
    fontSize: 18,
    fontWeight: '400',
    marginTop: '3%',
  },
  errors: {
    color: '#8c0d01',
    marginLeft: 15,
    marginTop: 5,
  },
  name: {
    color: '#737573',
    fontSize: 19,
    fontFamily: 'Cochin',
    top: 10,
    left: 20,
    // fontWeight: '400',
  },
  post: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#F5FCFF',
  },

  submit: {
    marginTop: '10%',
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#29475c',
    padding: 12,
    marginHorizontal: '5%',
  },
});
export default PasswordReset;
