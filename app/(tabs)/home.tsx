import { Link, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  const router=useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-2xl font-bold">Home Screen</Text>
      <Link href={"/"}></Link>
      
    </View>
  );
}
