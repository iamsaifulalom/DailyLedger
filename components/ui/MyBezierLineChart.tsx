import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#0000ff'
    }
};

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "july", "Aug", "Sep", "Oct"],
    datasets: [
        {
            data: [30, 45, 28, 80, 99, 43, 40, 12, 99],
            strokeWidth: 1
        }
    ]
};

const MyBezierLineChart = () => {
    return (
        <View className='bg-white rounded-lg py-4'>
            <Text className='text-center font-bold'>Capital in deffrent month</Text>
            <LineChart
                data={data}
                width={screenWidth - 32}
                height={220}
                chartConfig={chartConfig}
                bezier
                yAxisSuffix='k'
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
};

export default MyBezierLineChart;
