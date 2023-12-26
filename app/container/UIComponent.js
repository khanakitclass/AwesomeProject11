import { View, Text, Image, TextInput, ScrollView, Button, Switch, FlatList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../assets/colors/colors';

export default function UIComponent() {
    const [fname, setFName] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    console.log(isEnabled);

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    const ListItem = ({t}) => {
        return (
            <View style={{
                backgroundColor: 'pink',
                margin: 10,
                padding: 10
            }}>
                <Text>{t}</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <Text>UIComponent</Text>
            <Image
                style={{
                    width: 50,
                    height: 50,
                }}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />

            <Image
                style={{
                    width: 350,
                    height: 50,
                }}
                source={require('../../assets/images/star.png')}
            />

            <TextInput
                style={{
                    width: 200,
                    height: 50,
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                }}
                onChangeText={setFName}
                keyboardType="numeric"
                value={fname}
                placeholder='Please enter first name'
            />

            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <View style={{ paddingLeft: 20, width: 50, height: 20 }}>
                <Button title="X" color="tomato" disabled={true} />
            </View>

            <FlatList
                data={DATA}
                renderItem={({item}) => <ListItem t={item.title} />}
                keyExtractor={item => item.id}
            />

        </ScrollView>
    )
}