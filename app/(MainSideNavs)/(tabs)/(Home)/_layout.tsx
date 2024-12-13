import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
  screenOptions={{headerShown:true}}>
    <Stack.Screen name='Home' options={{headerLeft:()=><DrawerToggleButton/>}} />
    {/* <Stack.Screen name='Home' options={{headerLeft:()=><DrawerToggleButton/>}} /> */}
  </Stack>;
}
