import { Text, View } from "react-native";
import "../themes/unistyles";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about">About</Link>
    </View>
  );
}
