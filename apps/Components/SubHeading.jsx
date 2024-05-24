import { View, Text } from 'react-native'
import React from 'react'
import colors from '../Utils/Colors'
import { FlatList } from 'react-native-gesture-handler'

export default function SubHeading({text,color=colors.TEXTBLACK}) {
  return (
    <View>
        <Text style={{fontFamily:'outfit-bold',fontSize:24,color:color}}>{text}</Text>
    </View>
  )
}