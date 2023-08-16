import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-reanimated-table';
import Headers from '../Components/Header';
class ViewerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        '',
        'Location',
        'Browers',
        'viewed Time',
        'IP Address',
        'Operating System',
      ],
      widthArr: [40, 70, 80, 100, 100, 140],
    };
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 10; i += 1) {
      const rowData = [];
      for (let j = 0; j < 6; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <Headers left="arrowleft" title="viewers Details " />
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.textheader}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && {backgroundColor: '#F7F6E7'},
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {height: 50, backgroundColor: '#537791', color: '#fff'},
  text: {
    textAlign: 'center',
    fontWeight: '400',
    color: '#537791',
    fontSize: 15,
  },
  textheader: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
  },
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#E7E6E1'},
});

export default ViewerDetails;
