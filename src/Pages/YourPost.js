import {Card} from 'react-native-elements';
import Share from 'react-native-share';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import Header from '../Components/Header';

const YourPost = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [YourRefferal, setYourRefferal] = useState([]);
  const [status, setStatus] = useState(0);
  useEffect(() => {
    Posts();
  }, [status]);
  const Posts = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    axios
      .get(
        `http://192.168.1.13:4000/api/v1/user/getYourPostAllReferrals/${user_id}`,
      )
      .then(response => {
        const post = response.data;
        setYourRefferal(post);
        console.log(post);
      })
      .catch(error => {
        console.log(error, Object.keys(error), '================');
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

  const onInActiveHandler = async id => {
    const data = {
      status: 'inactive',
    };
    axios
      .put(`http://192.168.1.13:4000/api/v1/user/deleteReferrals/${id}`, data)
      .then(res => {
        console.log(res);
        setStatus({
          status: status + 1,
        });
      })
      .catch(error => {
        console.log(error, Object.keys(error), '================');
      });
  };
  const onIsActiveHandler = async id => {
    const data = {
      status: 'active',
    };
    axios
      .put(`http://192.168.1.13:4000/api/v1/user/deleteReferrals/${id}`, data)
      .then(res => {
        console.log(res);
        setStatus({
          status: status + 1,
        });
      })
      .catch(error => {
        console.log(error, Object.keys(error), '================');
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <Header left="arrowleft" title="Your Posts" />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          {YourRefferal.map((Refferral, index) => {
            return (
              <View>
                <Card style={styles.card}>
                  <View style={styles.row}>
                    <View></View>
                    <Card.Title>{Refferral.organization_name}</Card.Title>
                    <Card.Title>
                      {Refferral.status === 'active' ? (
                        <View>
                          <MaterialCommunityIcons
                            name="lightbulb-on"
                            size={25}
                            color="#f2e055"
                            onPress={() => {
                              onInActiveHandler(`${Refferral.id}`);
                            }}
                          />
                          <Text style={styles.postsave}>
                            {Refferral.status}
                          </Text>
                        </View>
                      ) : (
                        <View>
                          <MaterialCommunityIcons
                            name="lightbulb-on-outline"
                            size={25}
                            color="#fa675f"
                            const
                            onPress={() => onIsActiveHandler(`${Refferral.id}`)}
                          />
                          <Text style={styles.postsave}>
                            {' '}
                            {Refferral.status}
                          </Text>
                        </View>
                      )}
                    </Card.Title>
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
                      onPress={() => navigation.navigate('viewerDetails')}>
                      <Text style={styles.type}>Viewers Details</Text>
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
export default YourPost;
