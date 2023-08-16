import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import MyTabs from './MyTabs';
import PasswordReset from '../Pages/resetPassword';
import Profile from '../Pages/Profile';
import YourPost from '../Pages/YourPost';
import YourRefferals from '../Pages/YourRefferals';
import Chart from '../Pages/chart';
import Post from '../Pages/post';
import Payments from '../Pages/payments';
import Headers from './Header';
import Savedposts from '../Pages/savedPost';
import ViewerDetails from '../Pages/viewer_details';
const Stack = createNativeStackNavigator();
const Routes = () => {
  const userToken = AsyncStorage.getItem('token');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {userToken ? (
          <>
            <Stack.Screen
              name="MyTabs"
              component={MyTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen name="resetpassword" component={PasswordReset} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="YourPost" component={YourPost} />
            <Stack.Screen name="YourRefferals" component={YourRefferals} />
            <Stack.Screen name="Chart" component={Chart} />
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="payments" component={Payments} />
            <Stack.Screen name="savedPost" component={Savedposts} />
            <Stack.Screen name="viewerDetails" component={ViewerDetails} />

            <Stack.Screen name="Headers" component={Headers} />
          </>
        ) : null}
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
