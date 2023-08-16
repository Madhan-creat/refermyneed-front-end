/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Post from '../Pages/post';
import Feed from '../Pages/Feed';
import Menu from '../Pages/Menu';
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        activeTintColor: '#000',
        inactiveTintColor: '#fff',
        tabBarActiveTintColor: '#f5515e',
        tabBarInactiveTintColor: '#fff',
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          showLabel: false,
          position: 'absolute',
          bottom: 5,
          left: 40,
          right: 40,
          elevation: 0,
          backgroundColor: '#0b283b',
          height: 50,
          borderRadius: 20,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{position: 'absolute'}}>
              <Ionicons
                name="home"
                size={focused ? 25 : 20}
                color={focused ? '#f5515e' : '#fff'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={Post}
        name="Post"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{position: 'absolute'}}>
              <Ionicons
                name="add-circle-outline"
                size={focused ? 30 : 25}
                color={focused ? '#f5515e' : '#fff'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{position: 'absolute'}}>
              <Ionicons
                name="ios-grid-outline"
                size={focused ? 25 : 20}
                color={focused ? '#f5515e' : '#fff'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default MyTabs;
