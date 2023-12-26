import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class City extends Component {
  render() {
    return (
      <View>
        <Text>City</Text>
        <Text>{this.props.country}</Text>
        <Text>{this.props.z}</Text>
      </View>
    )
  }
}