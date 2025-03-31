import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const App = () => {
  const router = useRouter();
  
  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-5">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Welcome to Syria</Text>

      <Button
        mode="contained"
        onPress={() => router.push('/register')}
        className="w-full bg-blue-500 p-3 rounded-lg shadow-lg"
      >
        Get Started
      </Button>
    </View>
  );
};

export default App;
