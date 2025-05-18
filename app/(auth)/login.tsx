import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // استيراد useRouter

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter(); // استخدم useRouter للتوجيه إلى صفحة إعادة تعيين كلمة السر

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const handleSubmit = (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
    console.log(values);
    actions.setSubmitting(false);
    // توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول
    router.push('/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>مرحبًا بعودتك!</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              label="الاسم او البريد الإلكتروني"
              mode="outlined"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={!!(touched.email && errors.email)}
              style={styles.input}
              keyboardType="email-address"
            />
            <HelperText type="error" visible={!!(touched.email && errors.email)}>
              {errors.email}
            </HelperText>

            <View style={styles.passwordInputContainer}>
              <TextInput
                label="الرقم السري"
                mode="outlined"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={!!(touched.password && errors.password)}
                style={styles.input}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                style={styles.passwordToggle}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <HelperText type="error" visible={!!(touched.password && errors.password)}>
              {errors.password}
            </HelperText>

            <TouchableOpacity onPress={() => router.push('/forgot-password')}>
              <Text style={styles.forgotPasswordText}>
                هل نسيت كلمة السر؟
              </Text>
            </TouchableOpacity>

            <Button
              mode="contained"
              onPress={() => handleSubmit()}
              style={styles.loginButton}
            >
              تسجيل الدخول
            </Button>
          </>
        )}
      </Formik>
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
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    marginBottom: 10,
  },
  passwordInputContainer: {
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#007BFF',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#2EA7BA',
    marginBottom: 20,
  },
});

export default Login;
