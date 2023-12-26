import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Button({title, img,  onPress}) {
  return (
    <TouchableOpacity style={style.btnStyle} onPress={onPress}>
        <Image source={img}
        />
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    btnStyle: {
        backgroundColor: 'red',
        borderRadius: 20
    }
})