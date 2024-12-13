import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/Home.tsx to edit this screen.</Text>
      <Link href={'/TweetView'} asChild>
        <Button title="View Tweet"/>
      </Link>
      <Link href={'/AddMember'} asChild>
        <Button title="Add Member"/>
      </Link>
    </View>
  );
}
