import { View, Text } from 'react-native'
import React from 'react'
import HomeHeader from '../Components/HomeScreen/HomeHeader'
import color from '../Utils/color'

export default function HomeScreen() {
  return (
    <View >
      <View style={{backgroundColor:color.PRIMARY,height:250}}>
      <HomeHeader/>
      </View>
      
    </View>
  )
}