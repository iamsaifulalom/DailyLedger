import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import { users } from '@/constants/users'
import UserCard from '@/components/ui/UserCard';

export default function Users() {
  return (
    <View className='bg-white min-h-screen p-4'>
      <Text className='text-xl font-bold'>Customers</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map((user) => (<UserCard key={user.id} {...user} />))}
      </ScrollView>
    </View>
  )
}