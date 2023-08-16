import {Card} from 'react-native-elements';
import Share from 'react-native-share';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  RefreshControl,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Linking,
  Clipboard,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../Components/Header';
const Savedposts = () => {
  const [YourSavedRefferal, setYourSavedRefferal] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [Saveddelcount, setSaveddelcount] = useState(0);

  Saveddelcount;
  useEffect(() => {
    mysavedPosts();
  }, [Saveddelcount]);
  const mysavedPosts = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    axios
      .get(`http://192.168.1.13:4000/api/v1/user/getsavedReferrals/${user_id}`)
      .then(response => {
        const savedPost = response.data;
        console.log(savedPost);
        setYourSavedRefferal(savedPost);
      })
      .catch(error => {
        console.log(error, Object.keys(error));
      });
  };
  const issaved = async refer_id => {
    const user_id = await AsyncStorage.getItem('user_id');
    const data = {
      user_id: `${user_id}`,
    };
    await axios
      .post(
        `http://192.168.1.13:4000/api/v1/user/savedReferrals/${refer_id}`,
        data,
      )
      .then(response => {
        setSaveddelcount(Saveddelcount + 1);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const Refer = async url => {
    const options = {
      message: url,
    };
    try {
      const shareres = await Share.open(options);
    } catch (error) {
      console.log(error);
    }
  };

  //copy the url
  const copyUrl = url => {
    Clipboard.setString(url);
    const msg = 'copied';
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Header left="arrowleft" title="saved" />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          {YourSavedRefferal.map((Refferral, index) => {
            return (
              <View>
                <Card style={styles.card}>
                  <View style={styles.row}>
                    <View></View>
                    <Card.Title>{Refferral.organization_name}</Card.Title>
                    <View>
                      <MaterialCommunityIcons
                        name="heart-remove"
                        size={25}
                        color="#29475c"
                        onPress={() => {
                          issaved(Refferral.refer_id);
                        }}
                      />
                      <Text style={styles.postsave}>Remove</Text>
                    </View>
                  </View>

                  <Card.Image
                    source={{
                      uri: 'https://i.ytimg.com/vi/eZOdsCp3c_Y/maxresdefault.jpg/',
                    }}
                  />
                  <View style={styles.rowDetails}>
                    <Text style={styles.postDetials}>
                      <MaterialCommunityIcons
                        name="map-marker-radius-outline"
                        size={20}
                        color="#29475c"
                      />
                      {Refferral.place}
                    </Text>
                    <Text style={styles.postDetials}>
                      <MaterialCommunityIcons
                        name="phone-in-talk-outline"
                        size={20}
                        color="#29475c"
                      />
                      {Refferral.phone_number}
                    </Text>
                    <Text style={styles.postDetials}>
                      <MaterialCommunityIcons
                        name="eye-check-outline"
                        size={22}
                        color="#29475c"
                      />
                      &nbsp; View Limit:{Refferral.view_Limit}
                    </Text>
                  </View>

                  <Text style={styles.description}>
                    {Refferral.description}
                  </Text>

                  <View style={styles.postBtn}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => Linking.openURL(`${Refferral.url}`)}>
                      <Text style={styles.type}>Visit Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => copyUrl(`${Refferral.url}`)}>
                      <Text style={styles.type}>Copy URL</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.postBtn}>
                    <TouchableOpacity
                      style={styles.submit}
                      onPress={() => Refer(`${Refferral.url}`)}>
                      <Text style={styles.type}>Share</Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    shadowOpacity: 3,
    shadowColor: '#000',
    zIndex: 999,
  },
  postBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%',
  },
  postsave: {
    color: '#0d0d0d',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowDetails: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  description: {
    margin: 13,
    color: '#0d0d0d',
    fontSize: 13,
  },
  button: {
    width: '44%',
    alignItems: 'center',
    backgroundColor: '#29475c',
    padding: 10,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  submit: {
    width: '94%',
    alignItems: 'center',

    backgroundColor: '#29475c',
    padding: 10,
  },
  postDetials: {color: '#29475c', fontSize: 13, fontWeight: '500'},
});

export default Savedposts;
