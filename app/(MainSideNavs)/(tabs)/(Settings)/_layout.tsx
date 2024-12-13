import { Stack, Tabs } from "expo-router";
import Drawer from 'expo-router/drawer';

export default function RootLayout() {
  return <Drawer initialRouteName="settings" screenOptions={{}}>
    <Drawer.Screen name='Settings' />
    <Drawer.Screen name='Contact' />
    <Drawer.Screen name='Logout' />
  </Drawer>;
}
