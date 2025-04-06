import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white p-5">
      {/* Logo */}
      <Image
        source={require('../assets/images/Logo.png')} 
        style={{ width: 100, height: 100, marginBottom: 30 }}
      />

      {/* Welcome message */}
      <Text className="text-2xl font-bold text-gray-800 mb-6">اهلا بك في تطبيق سوقنا!</Text>

      {/* Create Account button */}
      <Button
        mode="contained"
        onPress={() => router.push('/register')}
        style={{
          backgroundColor: '#2EA7BA', 
          padding: 10,
          borderRadius: 10,
          width: '100%',
          marginBottom: 10
        }}
      >
        إنشاء حساب
      </Button>

      {/* Login button */}
      <Button
        mode="contained"
        onPress={() => router.push('/login')}
        style={{
          backgroundColor: '#2EA7BA', 
          padding: 10,
          borderRadius: 10,
          width: '100%',
          marginBottom: 10
        }}
      >
        تسجيل الدخول
      </Button>

      {/* Skip button */}
      <Button
        mode="text"
        onPress={() => router.push('/home')}
        style={{
      
          padding: 10,
          borderRadius: 10,
          width: '100%',
        }}
      >
        تخطي
      </Button>
    </View>
  );
};

export default App;
