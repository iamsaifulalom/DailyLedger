import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

type InputProps = {
  label?: string,
  placeholder?: string
}


export default function Input({ label, placeholder }: InputProps) {
  return (
    <View className='mt-3'>
      {label && <Text className='mb-1 ml-0.5 text-gray-600'>{label}</Text>}
      <TextInput placeholder={placeholder} className='border border-gray-300 rounded-lg px-4' />
    </View>
  )
}