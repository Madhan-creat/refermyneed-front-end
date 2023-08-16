/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Headers from '../Components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [userDetails, setRefferral] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    console.log(user_id);
    axios
      .get(`http://192.168.1.13:4000/api/v1/user/details/${user_id}`)
      .then(response => {
        const user = response.data.result;
        setRefferral(user);
        console.log(user);
      })
      .catch(error => {
        // Object.keys(error).forEach(key => {
        //   console.log(error[key]);
        // });
        console.log(error, Object.keys(error), '================');
      });
  };
  return (
    <View style={styles.container}>
      <Headers left="arrowleft" title="Your Profile " />
      <View style={styles.profileCard}>
        <View style={styles.row}>
          <View style={styles.LogoView}>
            <Image
              style={styles.Logo}
              source={require('/home/madan/Turnkey/first/src/Assets/Images/profieImage.png')}
            />
          </View>
          {userDetails.map((user, insex) => {
            return (
              <View>
                <Text style={styles.userName}>{user.user_name}</Text>
                <Text style={styles.userEmail}>{user.user_email}</Text>
                <Text style={styles.userEmail}>+91{user.user_phone}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.infoCard}>
        <TouchableOpacity onPress={() => navigation.navigate('YourPost')}>
          <View style={styles.TabsText}>
            <Ionicons name="layers-outline" style={styles.icons} size={40} />
            <Text style={styles.tabNames}>Your Posts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('YourRefferals')}>
          <View style={styles.TabsText}>
            <Ionicons
              name="ios-people-outline"
              style={styles.icons}
              size={40}
            />
            <Text style={styles.tabNames}>Your Refferals</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('resetpassword')}>
          <View style={styles.TabsText}>
            <MaterialCommunityIcons
              name="account-edit-outline"
              style={styles.icons}
              size={40}
            />
            <Text style={styles.tabNames}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.TabsText}>
            <Ionicons name="log-out-outline" style={styles.icons} size={40} />
            <Text style={styles.tabNames}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Post')}>
        <View style={styles.addpost}>
          <Ionicons name="add" style={styles.iconsAdd} size={80} />
          <Text style={styles.addText}>Add New Post</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  profileCard: {
    borderRadius: 10,
    height: '15%',
    width: '96%',
    marginHorizontal: '2%',
    marginTop: '10%',
    backgroundColor: '#29475c',
  },
  Logo: {
    marginVertical: '8%',
    marginLeft: '5%',
    borderRadius: 100,
    width: 70,
    height: 70,
  },
  icons: {
    alignSelf: 'center',
    color: '#29475c',
  },
  LogoView: {},
  row: {
    display: 'flex',
    flexDirection: 'row',
    margin: '5%',
  },
  userName: {
    fontSize: 20,
    color: '#fff',
    margin: '5%',
    fontWeight: '600',
  },
  userEmail: {
    fontSize: 15,
    color: '#fff',
    marginLeft: '5%',
  },
  infoCard: {
    borderRadius: 10,
    height: '15%',
    width: '96%',
    marginHorizontal: '2%',
    borderWidth: 1,
    borderColor: '#29475c',
    marginTop: '10%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabNames: {
    color: '#29475c',
    fontSize: 12,
    fontWeight: '500',
    alignSelf: 'center',
  },
  addpost: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  iconsAdd: {
    color: '#29475c',
    alignSelf: 'center',
  },
  addText: {
    color: '#29475c',
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
export default Profile;
