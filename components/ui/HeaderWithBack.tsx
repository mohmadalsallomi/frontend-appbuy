import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/AntDesign';
export default function HeaderWithBack({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View className="flex-row items-center p-4 bg-white shadow-sm">
       <Pressable onPress={() => router.back()} style={{ marginRight: 12 }}>
        <Icon name="arrowleft" size={24} color="#333" />
      </Pressable>
      <Text className="text-xl font-semibold text-gray-800">{title}</Text>
    </View>
  );
}
