import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Auxlayout = () => {
  return (
    <Stack  initialRouteName='privacy' screenOptions={{headerShown:false}}>
      <Stack.Screen name='privacy' options={{headerShown:true,title:'Umar'}}/>
      <Stack.Screen name='shipping' />
      <Stack.Screen name='disclaimer' />
      <Stack.Screen name='refund' />
    </Stack>
  )
}

export default Auxlayout