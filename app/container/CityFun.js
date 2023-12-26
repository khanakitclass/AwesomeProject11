import { View, Text } from 'react-native'
import React from 'react'

export default function CityFun(props) {
  return (
    <View>
      <Text>CityFun</Text>
      <Text>{props.con}</Text>
    </View>
  )
}