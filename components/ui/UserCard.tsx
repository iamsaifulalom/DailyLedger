import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type UserCardProps = {
    id: string | number,
    name: string,
    phone: string
}

export default function UserCard({ id, name, phone }: UserCardProps) {
    const { push } = useRouter();

    return (
        <TouchableOpacity onPress={() => { push(`/user/${id}`) }} className='flex-row mt-2 gap-4 border items-center border-gray-100 rounded-lg p-4'>
            <Feather name='user' size={25} color="gray" />
            <View>
                <Text className='text-lg font-bold'>{name}</Text>
                <Text className='text-sm text-gray-500'>{phone}</Text>
            </View>
        </TouchableOpacity>
    )
}