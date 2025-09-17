import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function UserDetailsCard() {
  return (
    <View className='flex-row mt-8'>
      <Feather
        name='user'
        size={100}
        color="gray"
        className='border border-gray-500 overflow-hidden rounded-full aspect-square text-center'
      />
      <View className='px-4'>
        <Text className='text-xl font-bold'>Saiful Alom</Text>
        <Text className='text-sm text-gray-500'>Phone: 01935679071</Text>
        <Text className='text-sm text-gray-500'>Father: Abdus Salam</Text>
        <Text className='text-sm text-gray-500'>ID card: 4223016991</Text>
        <Text className='text-sm text-gray-500'>Date Of Birth: 12-08-2004</Text>
        <View className='flex-row items-center justify-between'>
          <Text className='text-sm text-gray-500'>Total: 180k</Text>
          <Text className='text-sm text-gray-500'>Paid: 180k</Text>
        </View>
      </View>
    </View>
  )
}