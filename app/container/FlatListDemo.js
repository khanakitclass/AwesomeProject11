import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function FlatListDemo() {
    let userData = [
        {
            id: 1,
            name: 'amit',
            age: 25,
            city: 'Surat'
        },
        {
            id: 2,
            name: 'ajay',
            age: 25,
            city: 'Surat'
        },
        {
            id: 3,
            name: 'mayur',
            age: 25,
            city: 'Surat'
        },
        {
            id: 4,
            name: 'piyush',
            age: 25,
            city: 'Surat'
        },
        {
            id: 5,
            name: 'vasu',
            age: 25,
            city: 'Surat'
        }
    ];

    const List = ({ user }) => {
        return (
            <View style={style.userList}>
                <Text>{user.name}</Text>
                <Text>--{user.city}</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={userData}
                renderItem={({item}) => <List user={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const style = StyleSheet.create({
    userList: {
        backgroundColor: 'pink',
        margin: 10,
        padding: 10,
        fontSize: 16
    }
})