import { Text, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

type ButtonProps = {
  label?: string,
  isLoading?: boolean,
  className?: string
}


export default function Button({ label = "Button", isLoading = false, className }: ButtonProps) {
  return (
    <Pressable 
    className={`bg-black p-2.5 flex-row justify-center items-center gap-4 rounded-lg ${className}`}>
      {isLoading && <ActivityIndicator className='text-white' />}
      <Text className='text-white text-center text-lg'>{label}</Text>
    </Pressable>
  )
}