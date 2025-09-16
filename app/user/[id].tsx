import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import UserDetailsCard from '@/components/ui/UserDetailsCard';
import Header from '@/components/ui/Header';


export default function Details() {

    return (
        <View className='bg-white min-h-screen p-4'>
            <Header title='Details' />
            <UserDetailsCard />
        </View>
    )
}