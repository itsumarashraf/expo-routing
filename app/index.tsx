import { Link, router, useFocusEffect, useNavigation } from "expo-router";
import { useCallback } from "react";
import { Text, View } from "react-native";


export default function Index() {

  const navigation = useNavigation()
  useFocusEffect(
    useCallback(()=>{
      router.replace('/(tabs)/(Home)/Home')

    },[])
  )
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={'/(tabs)/(Home)/Home'} >got to tab layout</Link>
    </View>
  );
}
