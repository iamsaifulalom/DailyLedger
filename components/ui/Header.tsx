import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function Header({ title }: { title: string }) {
    const { back } = useRouter();

    return (
        <View className='flex-row justify-between border-b border-gray-100 pb-4 items-center'>
            <TouchableOpacity onPress={() => back()} accessibilityLabel="Go back">
                <Feather name='arrow-left' size={20} />
            </TouchableOpacity>
            <Text>{title}</Text>
        </View>
    )
}