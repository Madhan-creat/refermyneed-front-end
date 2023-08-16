import React from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Header from '../Components/Header';
//

const data = {
  labels: [
    'Test1',
    'Test2',
    'test3',
    'test4',
    'Test1',
    'Test2',
    'test3',
    'test4',
  ],
  legend: ['L1', 'L2', 'L3', 'L4', 'L5'],
  data: [
    [60, 60, 60, 50],
    [30, 30, 60],
    [60, 60, 60],
    [30, 30, 60],
    [60, 60, 60],
    [30, 30, 60],
    [60, 60, 60],
    [30, 30, 60],
  ],
  barColors: ['#49668a', '#6a8fbd', '#94b7e3', '#bdd5f2', '#f7964f'],
};

const Chart = () => {
  return (
    <View>
      <Header left="arrowleft" title="Chart" />

      <View style={{marginTop: '5%', marginLeft: '2%'}}>
        <StackedBarChart
          // style={graphStyle}
          data={data}
          width={Dimensions.get('window').width - 20}
          height={250}
          chartConfig={{
            backgroundGradientFrom: '#658499',
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: '#658499',
            backgroundGradientToOpacity: 1,
            color: opacity => 'rgba(255, 255, 256, 1)',
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false, // optional
          }}
          style={{borderRadius: 5}}
        />
        <Text style={styles.heading}> Your Post Chart</Text>
        <View style={{marginTop: '5%'}}>
          <StackedBarChart
            // style={graphStyle}
            data={data}
            width={Dimensions.get('window').width - 20}
            height={250}
            chartConfig={{
              backgroundGradientFrom: '#6599',
              backgroundGradientFromOpacity: 1,
              backgroundGradientTo: '#6584',
              backgroundGradientToOpacity: 1,
              color: opacity => 'rgba(255, 255, 256, 1)',
              strokeWidth: 3, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false, // optional
            }}
            style={{borderRadius: 10}}
          />
          <Text style={styles.heading}> Your Refferals Chart</Text>
        </View>
      </View>
    </View>
  );
};

export default Chart;
const styles = StyleSheet.create({
  heading: {
    color: '#326170',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: '2%',
  },
});
