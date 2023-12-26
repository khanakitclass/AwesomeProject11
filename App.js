import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Country from './app/container/Country'
import CountryFun from './app/container/CountryFun'
import Counter from './app/container/Counter'
import Clock from './app/container/Clock'
import ClockFun from './app/container/ClockFun'
import StopWatch from './app/container/Stopwatch'
import UIComponent from './app/container/UIComponent'
import FlatListDemo from './app/container/FlatListDemo'
import { NavigationContainer } from '@react-navigation/native';
import { ProductStack } from './app/routes/StackNavigator'
import BottomTabNavigator from './app/routes/BottomTabNavigator'
import 'react-native-gesture-handler';
import DrawerNavigator from './app/routes/DrawerNavigator'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )
  }
}