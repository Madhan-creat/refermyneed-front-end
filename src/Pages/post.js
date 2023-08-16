/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Headers from '../Components/Header';
import {Center} from 'native-base';
import RNFS from 'react-native-fs';
const schema = Yup.object().shape({
  organizationName: Yup.string().required('*fill the black'),
  phone: Yup.number().required('*fill the black'),
  description: Yup.string().required('*fill the black'),
  viewLimit: Yup.number().required('*fill the black'),
  url: Yup.string().url().required('*fill the black'),
  place: Yup.string().required('*fill the black'),
});
const Post = () => {
  const [organizationName, setOrganization_name] = useState('');
  const [url, setUrl] = useState({});
  const [description, setDescription] = useState('');
  const [phone, setPhone_number] = useState('');
  const [viewLimit, setView_Limit] = useState('');
  const [place, setPlace] = useState('');
  const [photo, setPhoto] = useState('');
  const [errors, setErrors] = useState({});
  const postdata = {
    organizationName: organizationName,
    url: url,
    description: description,
    phone: phone,
    viewLimit: viewLimit,
    place: place,
    Image: photo,
  };
  console.log(postdata);
  const onhandlePost = async () => {
    try {
      await schema.validate(postdata, {abortEarly: false});

      const user_id = await AsyncStorage.getItem('user_id');
      axios({
        method: 'POST',
        url: `http://192.168.1.13:4000/api/v1/user/addreferral/${user_id}`,
        data: postdata,
      })
        .then(res => {
          console.log(res);
          Alert.alert('Refferral Data', 'Your data is saved', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);

          setOrganization_name('');
          setUrl('');
          setDescription('');
          setPhone_number('');
          setPlace('');
          setView_Limit('');
          setPhoto('');
          setErrors({});
        })
        .catch(err => {
          console.log(err);
          Alert.alert('Refferral Data', `Your data is not saved`, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
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

  function showMessage() {
    Alert.alert('Upload image', 'Choose a option', [
      {
        text: 'Camera',
        onPress: () => openCamera(),
      },
      {
        text: 'Gallery',
        onPress: () => openLibrary(),
      },
    ]);
  }

  const openCamera = () => {
    //ongoing
  };
  const openLibrary = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      const pickImage = response.assets.find(ph => ph);
      convertToBase64(pickImage.uri);
    });
  };
  const convertToBase64 = async imagePath => {
    try {
      const base64 = await RNFS.readFile(imagePath, 'base64');
      setPhoto(base64);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Headers left="arrowleft" title="Add Refer Details " />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{top: '1%'}}>
            <Text style={styles.name}>Organazation Name</Text>
            {errors.organizationName && (
              <Text style={styles.errors}>{errors.organizationName}</Text>
            )}
            <TextInput
              style={styles.input}
              value={organizationName}
              name="organization_name"
              onChangeText={text => setOrganization_name(text)}
            />
          </View>
          <View>
            <Text style={styles.name}>Website URL</Text>
            {errors.url && <Text style={styles.errors}>{errors.url}</Text>}
            <TextInput
              style={styles.input}
              value={url}
              name="url"
              onChangeText={text => setUrl(text)}
            />
          </View>

          <View>
            <Text style={styles.name}>Description</Text>
            {errors.description && (
              <Text style={styles.errors}>{errors.description}</Text>
            )}
            <TextInput
              style={styles.Linput}
              numberOfLines={10}
              multiline={true}
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </View>

          <View>
            <Text style={styles.name}>Phone Number</Text>
            {errors.phone && <Text style={styles.errors}>{errors.phone}</Text>}
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={text => setPhone_number(text)}
            />
          </View>
          <View>
            <Text style={styles.name}>City</Text>
            {errors.place && <Text style={styles.errors}>{errors.place}</Text>}
            <TextInput
              style={styles.input}
              value={place}
              onChangeText={text => setPlace(text)}
            />
          </View>
          <View>
            <Text style={styles.name}>View Limit</Text>
            {errors.viewLimit && (
              <Text style={styles.errors}>{errors.viewLimit}</Text>
            )}
            <TextInput
              style={styles.input}
              value={viewLimit}
              onChangeText={text => setView_Limit(text)}
            />
          </View>
          <View style={styles.borderphoto}>
            {photo == '' ? (
              <View>
                <Text style={styles.photo_text}>Add Image</Text>
                <TouchableOpacity
                  onPress={() => showMessage()}
                  style={styles.addphoto}>
                  <Ionicons name="add" style={styles.icons} size={70} />
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: photo}}
                  style={{width: 100, height: 100}}
                />
              </View>
            )}
          </View>
          <View>
            <TouchableOpacity style={styles.submit} onPress={onhandlePost}>
              <Text style={styles.type}>POST</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    width: '90%',
    borderColor: '#29475c',
    borderWidth: 0.8,
    marginBottom: 0,
    marginHorizontal: '5%',
    color: '#737373',
    fontSize: 18,
    fontWeight: '400',

    marginTop: '3%',
  },
  Linput: {
    height: 100,
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
  icons: {
    color: '#29475c',
  },
  name: {
    color: '#737573',
    fontSize: 19,
    fontFamily: 'Cochin',
    top: 10,
    left: 20,
    // fontWeight: '400',
  },
  addphoto: {
    height: 85,
    width: 90,
    borderColor: '#29475c',
    borderWidth: 2.8,
    marginTop: '1%',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderphoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo_text: {
    marginTop: 3,
    color: '#29475c',
    fontSize: 19,
    fontFamily: 'Cochin',
  },
  type: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#F5FCFF',
  },
  errors: {
    color: '#8c0d01',
    marginLeft: 15,
    marginTop: 5,
  },
  submit: {
    marginTop: '5%',
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#29475c',
    padding: 12,
    marginHorizontal: '5%',
    marginBottom: '20%',
  },
});
export default Post;
