import { Text, Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Feather } from '@expo/vector-icons'
import Input from '@/components/ui/Input' // see forwarded-ref Input below
import Button from '@/components/ui/Button'

export default function AddUser() {


  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === 'android' ? 140 : 20}
      keyboardShouldPersistTaps="handled"
    >
      <Text className='text-xl font-bold'>Add new user</Text>

      <Feather
        name='user'
        size={100}
        color="gray"
        style={{
          marginTop: 28,
          alignSelf: 'center',
          borderRadius: 999,
          borderWidth: 1,
          borderColor: '#ddd',
          padding: 8,
        }}
      />

      <Input
        label='Name'
        placeholder='Abdur Rahman'
      />

      <Input
        label='Phone Number'
        placeholder='01xxxxxxxxx'
      />

      <Input
        label='ID/Passport number'
        placeholder='AB1234567'
      />

      <Input
        label='Date of birth'
        placeholder='18-03-25'
      />

      <Input
        label='Father name'
        placeholder='Abdur Rahman'
      />

      <Input
        label='Loan'
        placeholder='500000'
      />
      <Input
        label='Paid'
        placeholder='500000'
      />
      <Button
        isLoading={true}
        label='Save'
        className='mt-5'
      />
    </KeyboardAwareScrollView>
  )
}
