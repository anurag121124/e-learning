import { View, Text } from 'react-native'
import React from 'react'
import HomeHeader from '../Components/HomeScreen/HomeHeader'
import CourseList from '../Components/Courses/CourseList'

export default function HomeScreen() {
  return (
    <View >
      <View style={{backgroundColor:"#44B877",height:250}}>
      <HomeHeader/>
      </View>
      <View>
        <CourseList/>
      </View>
    </View>
  )
}