import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Octicons from 'react-native-vector-icons/Octicons';
import * as Yup from 'yup';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const schema = Yup.object().shape({
  name: Yup.string().required('*fill the black'),
  phone: Yup.number()
    .required('*fill the black')
    .min(9, '*Min 4 Letter Required'),
  email: Yup.string().email().required('*fill the black'),
  password: Yup.string()
    .required('*fill the black')
    .min(4, '*Min 4 Letter Required'),
});
const Register = ({navigation}) => {
  const [users, setUser] = useState({type: ''});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  console.log(name, email, phone, password);
  console.log(users.type);
  const onhandleUserType = () => {
    setUser({type: true});
  };
  const onhandleVendorType = () => {
    setUser({type: false});
  };
  const registerData = {
    name: name,
    email: email,
    password: password,
    phone: phone,
  };
  const onhandRegister = async () => {
    try {
      await schema.validate(registerData, {abortEarly: false});
      await axios
        .post('http://192.168.1.13:4000/api/v1/user/register', registerData)
        .then(res => {
          console.log(res);
          navigation.navigate('Login');
          setErrors({});
          setName('');
          setPhone('');
          setEmail('');
          setPassword('');
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      // Validation error, set the errors state
      const errors = {};
      err.inner.forEach(e => {
        errors[e.path] = e.message;
      });
      setErrors(errors);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={styles.LogoVIew}>
            <Image
              style={styles.Logo}
              source={require('/home/madan/Turnkey/first/src/Assets/Images/refer.jpeg')}
            />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>CREATE ACCOUNT </Text>
          </View>
          <View style={styles.inputView}>
            {errors.name && <Text style={styles.errors}>{errors.name}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Enter Your Full Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            {errors.phone && <Text style={styles.errors}>{errors.phone}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
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
          <View style={styles.typeView}>
            <Text style={styles.typeTittle}>Who Are You ? </Text>
          </View>
          <View style={styles.typeBtn}>
            <TouchableOpacity style={styles.button} onPress={onhandleUserType}>
              <Text style={styles.type}>
                User &nbsp;
                {users.type ? (
                  <Octicons
                    style={styles.icon}
                    name="thumbsup"
                    size={18}
                    color={'#f5515e'}
                  />
                ) : null}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={onhandleVendorType}>
              <Text style={styles.type}>
                Vendor&nbsp;
                {users.type ? null : (
                  <Octicons
                    style={styles.icon}
                    name="thumbsup"
                    size={18}
                    color={'#f5515e'}
                  />
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.typeBtn}>
            <TouchableOpacity style={styles.submit} onPress={onhandRegister}>
              <Text style={styles.type}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginView}>
            <Text
              style={styles.login}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101721',
  },
  Logo: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  LogoVIew: {
    alignSelf: 'center',
    marginTop: '35%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#999e9d',
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
  inputView: {
    marginTop: '5%',
  },
  icon: {
    fontWeight: 'bold',
  },
  typeTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999e9d',
  },
  typeView: {
    alignSelf: 'center',
    marginTop: '0%',
  },
  typeBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
  },
  button: {
    width: '44%',
    alignItems: 'center',
    backgroundColor: '#2a6b62',
    padding: 10,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999e9d',
  },

  submit: {
    width: '94%',
    alignItems: 'center',
    backgroundColor: '#2a6b62',
    padding: 10,
  },
  login: {
    alignItems: 'center',
    textDecorationLine: 'underline',
    marginTop: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999e9d',
  },
  loginView: {
    alignItems: 'center',
    marginBottom: '18%',
  },
});

export default Register;
