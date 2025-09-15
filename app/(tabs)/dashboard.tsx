import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import DataCard from '@/components/ui/DataCard'

export default function dashboard() {
    return (
        <ScrollView className='p-4' showsVerticalScrollIndicator={false}>
            <Text className='text-3xl text-center'>
                <Text className='font-bold'>Wellcome</Text> to Dashboard
            </Text>
            {/* Data at glance */}
            <View className='flex-col mt-5 gap-3'>
                <DataCard
                    title='Loan asset'
                    value="10000k"
                    percentage='10% ↑'
                    percentageColor='green'
                    comparisonValue="3000k"
                />
                <DataCard
                    title='Reserve'
                    value="10000k"
                    percentage='10% ↑'
                    percentageColor='green'
                    comparisonValue="3000k"
                />
                <DataCard
                    title='Capital'
                    value="10,000k"
                    percentage='10% ↓'
                    percentageColor='red'
                    comparisonValue="30000k"
                />
            </View>
        </ScrollView>
    )
}