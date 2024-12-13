import { Link, Stack, Tabs } from "expo-router";
import { Button, Text } from "react-native";
import Drawer from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

export default function RootLayout() {
  return <Drawer screenOptions={
    {
      headerShown:true,
      // drawerHideStatusBarOnOpen:true,
      // drawerStatusBarAnimation:'fade',
      drawerType:'slide',
      drawerIcon:(props)=><Text>♥️</Text>
    }
  }
  drawerContent={(props)=>{
    return(
      <DrawerContentScrollView>
        <DrawerItemList {...props}/>
        <Link href={'/Settings'} asChild>
          <Button title={'Settings'} />
        </Link>
        
        <Link style={{marginTop:20}} href={'/refund'} asChild >
          <Button title={'refund'} />
        </Link>
        <Link style={{marginTop:20}} href={'/disclaimer'} asChild >
          <Button title={'disclaimer'} />
        </Link>
        <Link style={{marginTop:20}} href={'/shipping'} asChild >
          <Button title={'shipping'} />
        </Link>
        <Link style={{marginTop:20}} href={'/privacy'} asChild >
          <Button title={'privacy'} />
        </Link>

      </DrawerContentScrollView>

    )
  }}
  >
    <Tabs.Screen name='(tabs)' options={{headerShown:false}} />
    {/* <Tabs.Screen name='(aux)' options={{headerShown:true}} /> */}
  </Drawer>;
}
