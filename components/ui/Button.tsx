import { Text, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

type ButtonProps = {
  label?: string,
  isLoading?: boolean,
  className?: string,
  onPress?: () => void
}

export default function Button({ label = "Button", isLoading = false, className, onPress }: ButtonProps) {
  return (
    <Pressable
      style={{ backgroundColor: isLoading ? "#00000099" : "#000000" }}
      onPress={onPress}
      className={`p-2.5 flex-row justify-center items-center gap-4 rounded-lg ${className}`}>
      {isLoading ?
        <ActivityIndicator size={25} className='text-white text-lg' /> :
        <Text className='text-white text-center text-lg'>{label}</Text>
      }
    </Pressable>
  )
}