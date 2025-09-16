import { View, Text } from 'react-native'
import React from 'react'

type DataCardProps = {
    title: string;
    value: string | number;
    percentage: string;
    percentageColor?: 'green' | 'red';
    comparisonValue: string | number;
};

export default function DataCard({
    title,
    value,
    percentage,
    percentageColor,
    comparisonValue
}: DataCardProps) {
    return (
        <View className='w-full border border-gray-100 text-slate-700 bg-white rounded-lg p-4'>
            <View className='flex-row gap-2 items-center'>
                <Text>{title}</Text>
                <Text style={{ color: percentageColor }}>{percentage}</Text>
            </View>
            <Text className='text-3xl my-2 '>{value}</Text>
            <View className='flex-row justify-between items-center'>
                <Text>vs. last month</Text>
                <Text>{comparisonValue}</Text>
            </View>
        </View>
    )
}