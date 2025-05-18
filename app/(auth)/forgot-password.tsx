import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // استخدم useRouter للتوجيه بين الصفحات

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const router = useRouter(); // استخدم useRouter لتوجيه المستخدم

  const handleSubmit = () => {
    // هنا يتم إرسال الرابط لإعادة تعيين كلمة المرور
    console.log('Password reset link sent to:', email);
    // بعد إرسال الرابط يمكن توجيه المستخدم إلى صفحة تسجيل الدخول أو عرض رسالة نجاح
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>إعادة تعيين كلمة المرور</Text>
      <Text style={styles.subtitle}>الرجاء إدخال بريدك الإلكتروني لإعادة تعيين كلمة المرور.</Text>

      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button
        title="إرسال رابط إعادة تعيين كلمة المرور"
        onPress={handleSubmit}
        color="#2EA7BA"
      />

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.loginLink}>لديك حساب؟ تسجيل الدخول</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'right',
    color: '#888',
    marginBottom: 50,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  loginLink: {
    textAlign: 'center',
    color: '#007BFF',
    marginTop: 20,
    borderRadius: 15,
  },
});

export default ForgotPassword;
