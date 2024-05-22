import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Link href="/search">Add Food</Link>
      <Text>Home screen</Text>
    </View>
  )
}