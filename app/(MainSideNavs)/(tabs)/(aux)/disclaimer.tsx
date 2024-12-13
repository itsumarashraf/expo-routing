import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'

const disclaimer = () => {
  // useEffect(()=>{
  //   router.replace('/disclaimer')
  // },[])
  return (
    <View>
      <Text>disclaimer and long text alsong</Text>
    </View>
  )
}

export default disclaimer