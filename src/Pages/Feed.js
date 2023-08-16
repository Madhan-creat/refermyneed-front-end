import {Card, SearchBar, Header} from 'react-native-elements';

import Share from 'react-native-share';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  RefreshControl,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Linking,
  ToastAndroid,
  TextInput,
} from 'react-native';
import Icon from 'react-native-fontawesome';
const Feed = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [Refferrals, setRefferral] = useState([]);
  const [saveddata, setYourSaveddata] = useState([]);
  const [saveddataCount, setsaveddataCount] = useState(0);
  const [search, setsearch] = useState('');
  const [isSearch, setisSearch] = useState(false);

  useEffect(() => {
    if (search.length > 0) {
      axios
        .get(`http://192.168.1.13:4000/api/v1/user/getAllReferrals/${search}`)
        .then(response => {
          const posts = response.data;
          setRefferral(posts);
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios
        .get('http://192.168.1.13:4000/api/v1/user/getAllReferrals')
        .then(response => {
          const posts = response.data;
          setRefferral(posts);
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [search, refreshing]);

  useEffect(() => {
    savedData();
  }, [saveddataCount, refreshing]);

  const savedData = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    axios
      .get(`http://192.168.1.13:4000/api/v1/user/getsavedReferrals/${user_id}`)
      .then(response => {
        const savedPost = response.data;
        setYourSaveddata(savedPost);
        console.log(response);
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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
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
        setsaveddataCount(saveddataCount + 1);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onSearch = () => {
    console.log(isSearch);
    if (isSearch === true) {
      setisSearch(false);
    } else {
      setisSearch(true);
    }
  };
  const refer_ID = saveddata.map((saved, index) => {
    return saved.refer_id;
  });
  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#0b283b"
        placement="left"
        leftComponent={<Text style={styles.title}> Share2Earn</Text>}
        centerComponent={
          isSearch ? (
            <TextInput
              style={styles.search}
              placeholder={'Search Title,Location ...'}
              onChangeText={text => setsearch(text)}
              value={search}
            />
          ) : null
        }
        rightComponent={
          <MaterialIcons
            name="search"
            size={31}
            color="#fff"
            onPress={() => {
              setisSearch(onSearch);
            }}
          />
        }
      />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.feed}>
          {Refferrals.map((Refferral, index) => {
            return (
              <View>
                <View style={styles.card}>
                  <View style={styles.row}>
                    <View></View>
                    <View>
                      <Text style={styles.company}>
                        {Refferral.organization_name}
                      </Text>
                    </View>
                    <View>
                      <Text>
                        <View>
                          {refer_ID.some(ele => {
                            return ele === Refferral.refer_id;
                          }) ? (
                            <View>
                              <MaterialCommunityIcons
                                name="heart"
                                size={25}
                                color="#29475c"
                                onPress={() => {
                                  issaved(Refferral.refer_id);
                                }}
                              />
                              <Text style={styles.postsave}>saved</Text>
                            </View>
                          ) : (
                            <View>
                              <MaterialCommunityIcons
                                name="heart-outline"
                                size={25}
                                color="#29475c"
                                onPress={() => {
                                  issaved(Refferral.refer_id);
                                }}
                              />
                              <Text style={styles.postsave}>save</Text>
                            </View>
                          )}
                        </View>
                      </Text>
                    </View>
                  </View>

                  <Card.Image source={{uri: 'https://picsum.photos/200/300'}} />
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
                        name="phone-forward"
                        size={17}
                        color="#29475c"
                      />
                      &nbsp;
                      {Refferral.phone_number}
                    </Text>
                    <Text style={styles.postDetials}>
                      <MaterialCommunityIcons
                        name="account-eye-outline"
                        size={20}
                        color="#29475c"
                      />
                      View Limit:{Refferral.view_Limit}
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
                      onPress={() => Refer(`${Refferral.url}`)}>
                      <Text style={styles.type}>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#B3B3B3',
  },
  card: {
    margin: 5,
    borderWidth: 0,
    borderColor: '#000',
    borderRadius: 5,
    shadowOpacity: 1,
    backgroundColor: '#FFFFF7',
  },
  postBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%',
  },
  rowDetails: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  description: {
    margin: 13,

    fontSize: 13,
    fontStyle: 'italic',
    alignSelf: 'center',
    color: '#0b283b',
  },
  button: {
    width: '44%',
    alignItems: 'center',
    borderRadius: 2,
    padding: 10,
    borderColor: '#0b283b',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#0b283b',
  },
  feed: {
    marginBottom: 80,
  },
  company: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '600',
    color: '#0b283b',
    left: 20,
    fontStyle: 'italic',
    marginTop: 7,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  postDetials: {color: '#29475c', fontSize: 13, fontWeight: '500'},
  postsave: {
    color: '#29475c',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  title: {
    fontSize: 23,
    alignSelf: 'center',
    top: 0,
    fontWeight: '600',
    color: '#c2c4c4',
    left: 10,
    fontStyle: 'italic',
  },
  search: {
    height: 32,
    width: '84%',
    borderRadius: 10,
    marginHorizontal: '20%',
    color: '#c1dbe8',
    fontSize: 11,
    fontWeight: '500',
    backgroundColor: '#21354d',
  },
});
export default Feed;
