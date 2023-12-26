import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../component/Button/Button'

export default function Contact() {
  return (
    <View>
      <Text>Contact</Text>

      <Button
        title={"Contact Details"}
        onPress={() => console.log("OK")}
      />
    </View>
  )
}