import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const { width } = Dimensions.get('window'); // الحصول على عرض الشاشة

const App = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.logo}
      />

      {/* Welcome message */}
      <Text style={styles.welcomeText}>أهلاً بك في تطبيق سوقنا!</Text>

      {/* Create Account button */}
      <Button
        mode="contained"
        onPress={() => router.push('/register')}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        إنشاء حساب
      </Button>

      {/* Login button */}
      <Button
        mode="contained"
        onPress={() => router.push('/login')}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        تسجيل الدخول
      </Button>

      {/* Skip button */}
      <Button
        mode="text"
        onPress={() => router.push('/home')}
        labelStyle={styles.skipButtonText}
      >
        تخطي
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' as const, // حل مشكلة alignItems
    backgroundColor: '#F0F0F0', // لون خلفية فاتح
    paddingHorizontal: 10,
  },
  logo: {
    width: width * 0.2, // عرض نسبي للشاشة
    height: width * 0.2, // ارتفاع نسبي للشاشة
    marginBottom: 40, // مسافة بين الشعار والنص
  },
  welcomeText: {
    fontSize: 24, // حجم خط واضح
    fontWeight: '700' as const, // حل مشكلة fontWeight
    color: '#333', // لون نص واضح
    marginBottom: 50, // مسافة بين النص والأزرار
    textAlign: 'center' as const, // حل مشكلة textAlign
  },
  button: {
    backgroundColor: '#2EA7BA', // لون أزرق متناسق
    paddingVertical: 5, // مساحة داخلية عمودية أكبر
    paddingHorizontal: 12,
    borderRadius: 10, // حواف مستديرة
    width: width * 0.8, // عرض نسبي للشاشة
    marginBottom: 15, // مسافة بين الأزرار
  },
  buttonText: {
    fontSize: 18, // حجم خط أكبر للأزرار
    color: '#fff',
  },
  skipButtonText: {
    fontSize: 16,
    color: '#2EA7BA', // لون أزرق هادئ
    marginTop: 10,
  },
});

export default App;
