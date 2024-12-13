import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs screenOptions={{headerShown:false}}>
    <Tabs.Screen name='(Home)' options={{headerShown:false}} />
    <Tabs.Screen name='Profile' options={{headerShown:true}} />
    <Tabs.Screen name='(Settings)' options={{headerShown:false}} />
    <Tabs.Screen name='(aux)' options={{headerShown:false,href:null}} />
  </Tabs>
}
