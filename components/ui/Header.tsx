import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function Header({ title }: { title: string }) {
    const { back } = useRouter();

    return (
        <View className='flex-row justify-between border-b border-gray-100 pb-2 items-center'>
            <TouchableOpacity onPress={() => back()} className='size-8 items-center flex justify-start rounded-full border-gray-200' accessibilityLabel="Go back">
                <Feather name='arrow-left' size={24} />
            </TouchableOpacity>
            <Text className='text-xl font-bold'>{title}</Text>
        </View>
    )
}