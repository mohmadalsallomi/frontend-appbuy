import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import useAuth from '../../context/auth';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl font-bold">Login</Text>
      
    </View>
  );
}
