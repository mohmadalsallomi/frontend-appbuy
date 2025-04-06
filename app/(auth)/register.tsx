import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';

interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required')
  });

  const handleSubmit = (values: SignupFormValues, actions: FormikHelpers<SignupFormValues>) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        إنشاء حساب
      </Text>

      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
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

            <View style={{ position: 'relative' }}>
              <TextInput
                label="تأكيد الرقم"
                mode="outlined"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                error={!!(touched.confirmPassword && errors.confirmPassword)}
                style={{ marginBottom: 20 }}
                secureTextEntry={!confirmPasswordVisible}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 15,
                }}
                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                <Ionicons name={confirmPasswordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <HelperText type="error" visible={!!(touched.confirmPassword && errors.confirmPassword)}>
              {errors.confirmPassword}
            </HelperText>

            <Button
  mode="contained"
  onPress={() => handleSubmit()}
  style={{ backgroundColor: '#2EA7BA', marginBottom: 12 }}
>
  إنشاء حساب
</Button>


            <TouchableOpacity onPress={() => console.log('Redirect to login')}>
              <Text style={{ textAlign: 'center', color: '#2EA7BA' }}>
                تسجيل الدخول لدي حساب بالفعل
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Register;
