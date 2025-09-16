import { View, Text } from 'react-native';
import UserDetailsCard from '@/components/ui/UserDetailsCard';
import Header from '@/components/ui/Header';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Details() {

    return (
        <View className='bg-white min-h-screen p-4'>
            <Header title='Details' />
            <UserDetailsCard />
            <Text className='mt-5 text-lg font-bold border-b border-gray-100'>Customer transections</Text>
            <Table>
                <Row data={["Date", "Amount", "type", "Update"]} />
                <Rows data={[
                    ['01/07/25', '2k', 'Loan +', 'Update'],
                    ['01/07/25', '3.5k', 'Loan +', 'Update'],
                    ['01/07/25', '4k', 'Loan +', 'Update'],
                    ['01/07/25', '3k', 'Loan -', 'Update'],
                ]}
                />
            </Table>
        </View>
    )
}