import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, HelperText } from 'react-native-paper';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';
import useAuth from '../../context/auth';

interface LoginFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
    login(values.email, values.password);  // Use login function from context
    actions.setSubmitting(false);
    router.push('/home');  // Navigate to the dashboard after successful login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <HelperText type="error" visible={!!(touched.email && errors.email)}>
              {errors.email}
            </HelperText>

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            <HelperText type="error" visible={!!(touched.password && errors.password)}>
              {errors.password}
            </HelperText>

            <Button
              mode="contained"
              onPress={() => handleSubmit()}  // No need to pass event here
              style={styles.button}
            >
              Login
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#6200ea',
    borderRadius: 8,
  },
});
