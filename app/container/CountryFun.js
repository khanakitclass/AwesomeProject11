import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import CityFun from './CityFun';

export default function CountryFun() {
    //hook
    const [countryName, setCountryName] = useState('India');

    const changeCountry = () => {
        setCountryName('UK');
    }

    return (
        <View>
            <Text>CountryFun</Text>
            <Text>{countryName}</Text>

            <Button
                title='Chnage Country'
                onPress={() => changeCountry()}
            />

            <CityFun con={countryName} />
        </View>
    )
}