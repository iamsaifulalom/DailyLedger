import React from "react";
import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

export default function MyPieChart() {
  const data = [
    { name: "Food", population: 215, color: "#f87171", legendFontColor: "#333", legendFontSize: 12 },
    { name: "Rent", population: 280, color: "#34d399", legendFontColor: "#333", legendFontSize: 12 },
    { name: "Bills", population: 527, color: "#60a5fa", legendFontColor: "#333", legendFontSize: 12 },
  ];

  return (
    <View className="w-full border border-gray-100 bg-white rounded-lg">
      <PieChart
        data={data}
        width={Dimensions.get("window").width - 20}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </View>
  );
}
