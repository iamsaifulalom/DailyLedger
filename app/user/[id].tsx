import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function Details() {

    const { id } = useLocalSearchParams()
    return (
        <View className='bg-white min-h-screen p-4'>
            <Text>Details {id}</Text>
        </View>
    )
}