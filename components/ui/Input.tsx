import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native'
import React from 'react'

type InputProps = {
  label?: string,
  placeholder?: string,
  keyboardType?: KeyboardTypeOptions
}


export default function Input({ label, placeholder, keyboardType = "default" }: InputProps) {
  return (
    <View className='mt-3'>
      {label && <Text className='mb-1 ml-0.5 text-gray-600'>{label}</Text>}
      <TextInput keyboardType={keyboardType} placeholder={placeholder} className='border border-gray-300 rounded-lg px-4' />
    </View>
  )
}