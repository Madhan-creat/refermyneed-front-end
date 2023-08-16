import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Linking,
  Clipboard,
  ToastAndroid,
} from 'react-native';
import {Card} from 'react-native-elements';
import Header from '../Components/Header';
const YourRefferals = () => {
  return (
    <View>
      <Header title="Your Posts " />
      <View>
        <Card style={styles.card}>
          <Card.Title>Google.in</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
            }}
          />
          <Card.Divider />
          <Text style={{marginBottom: 10, color: '#0d0d0d'}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <View style={styles.postBtn}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                Linking.openURL(
                  'https://www.cricbuzz.com/cricket-match/live-scores/recent-matches',
                )
              }>
              <Text style={styles.type}>Visit Website</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.type}>Copy URL</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  button: {
    width: '44%',
    alignItems: 'center',
    backgroundColor: '#2a6b62',
    padding: 10,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default YourRefferals;
