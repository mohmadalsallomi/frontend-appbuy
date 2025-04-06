import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const handleSubmit = (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        مرحبًا بعودتك!
      </Text>

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
              style={{ marginBottom: 10 }}
              keyboardType="email-address"
            />
            <HelperText type="error" visible={!!(touched.email && errors.email)}>
              {errors.email}
            </HelperText>

            <View style={{ position: 'relative' }}>
              <TextInput
                label="الرقم السري"
                mode="outlined"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={!!(touched.password && errors.password)}
                style={{ marginBottom: 10 }}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 15,
                }}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <HelperText type="error" visible={!!(touched.password && errors.password)}>
              {errors.password}
            </HelperText>

            <TouchableOpacity onPress={() => console.log('Redirect to reset password')}>
              <Text style={{ textAlign: 'right', color: '#007BFF', marginBottom: 20 }}>
                هل نسيت كلمة السر؟
              </Text>
            </TouchableOpacity>

            <Button
              mode="contained"
              onPress={() => handleSubmit()}
              style={{ backgroundColor: '#2EA7BA', marginBottom: 20 }}
            >
              تسجيل الدخول
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
