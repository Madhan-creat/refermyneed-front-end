import {Card} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  BackHandler,
} from 'react-native';
import Header from '../Components/Header';

const Menu = ({navigation}) => {
  const handleBackButton = () => {
    useState;
    return true;
  };
  const Logout = async () => {
    await AsyncStorage.removeItem('token');
    let backHandler = BackHandler;
    const handleBackButton = () => {
      return true;
    };
    navigation.navigate('Login');
    backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    // Clean up the back button handler when the component unmounts
    return () => {
      backHandler.remove();
    };
  };
  return (
    <View style={styles.container}>
      <View>
        <Header left="arrowleft" title="Menu" />
      </View>

      <View style={styles.row}>
        <View>
          <TouchableOpacity
            style={styles.Tabs}
            onPress={() => navigation.navigate('profile')}>
            <View style={{backgroundColor: '#bd2ba0'}}>
              <View style={styles.TabsText}>
                <Ionicons
                  name="person-outline"
                  style={styles.icons}
                  size={35}
                />
                <Text style={styles.tabNames}>Profile</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Tabs}
            onPress={() => navigation.navigate('YourPost')}>
            <View style={{backgroundColor: '#3187c4'}}>
              <View style={styles.TabsText}>
                <Ionicons
                  name="layers-outline"
                  style={styles.icons}
                  size={35}
                />
                <Text style={styles.tabNames}>Your Posts</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Tabs}
            onPress={() => navigation.navigate('payments')}>
            <View style={{backgroundColor: '#f56b38'}}>
              <View style={styles.TabsText}>
                <MaterialCommunityIcons
                  name="bank-outline"
                  style={styles.icons}
                  size={35}
                />
                <Text style={styles.tabNames}>Payments</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Tabs}
            onPress={() => navigation.navigate('resetpassword')}>
            <View style={{backgroundColor: '#3db3af'}}>
              <View style={styles.TabsText}>
                <MaterialCommunityIcons
                  name="account-edit-outline"
                  style={styles.icons}
                  size={35}
                />
                <Text style={styles.tabNames}>Update Password</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Tabs}
            onPress={() => navigation.navigate('Chart')}>
            <View style={{backgroundColor: '#ae2bbd'}}>
              <View style={styles.TabsText}>
                <Ionicons
                  style={styles.icons}
                  name="ios-bar-chart-outline"
                  size={35}
                />
                <Text style={styles.tabNames}>charts</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Tabs}
            onPress={() => navigation.navigate('YourRefferals')}>
            <View style={{backgroundColor: '#dba36e'}}>
              <View style={styles.TabsText}>
                <Ionicons
                  style={styles.icons}
                  name="ios-people-outline"
                  size={35}
                />
                <Text style={styles.tabNames}>Your Refferals</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Tabs}
            onPress={() => navigation.navigate('savedPost')}>
            <View style={{backgroundColor: '#448049'}}>
              <View style={styles.TabsText}>
                <Ionicons name="heart-outline" style={styles.icons} size={35} />
                <Text style={styles.tabNames}> Saved Posts </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Tabs} onPress={Logout}>
            <View style={{backgroundColor: '#FFD56F'}}>
              <View style={styles.TabsText}>
                <Ionicons
                  name="log-out-outline"
                  style={styles.icons}
                  size={35}
                />
                <Text style={styles.tabNames}>Log out</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.greeting}>Thank you for visit Madhan !!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    marginTop: '25%',
    color: '#29475c',
    fontSize: 20,
    fontWeight: 'smaller',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  TabsText: {
    alignSelf: 'center',
    marginTop: '15%',
  },

  Tabs: {
    width: 195,
    height: 130,

    marginLeft: 15,
    marginTop: 15,
    borderRadius: 1,
    // borderWidth: 1,

    // borderColor: '#29475c',
  },
  tabNames: {
    display: 'flex',
    flex: 1,
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%',
  },
  icons: {
    alignSelf: 'center',
    color: '#fff',
  },
});
export default Menu;
