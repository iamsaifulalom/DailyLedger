import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import DataCard from '@/components/ui/DataCard'
import MyBezierLineChart from '@/components/ui/MyBezierLineChart'

export default function dashboard() {
    return (
        <View className='p-4 bg-white'>
            <Text className='text-xl'>
                <Text className='font-bold'>Wellcome</Text> to Dashboard
            </Text>
            {/* Data at glance */}
            <ScrollView className='flex-col mt-5 gap-3 mb-8' showsVerticalScrollIndicator={false}>
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
                    title='Expances'
                    value="10k"
                    percentage='10% ↓'
                    percentageColor='green'
                    comparisonValue="30k"
                />
                <DataCard
                    title='Capital'
                    value="10000k"
                    percentage='10% ↓'
                    percentageColor='red'
                    comparisonValue="30000k"
                />
                {/* line chart */}
                <MyBezierLineChart />
            </ScrollView>
        </View>
    )
}