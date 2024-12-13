import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const TweetView = () => {
  return (
    <View>
      <Text>TweetView</Text>
         <Link href={'/(TweetViewTab)/CreateTweet'} asChild>
            <Button title="View Tweet Tab"/>
        </Link>
    </View>
  )
}

export default TweetView