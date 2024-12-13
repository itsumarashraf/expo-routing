import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs >
   <Tabs.Screen name='CreateTweet'/>
   <Tabs.Screen name='ViewAllTweets'/>
  </Tabs>;
}
