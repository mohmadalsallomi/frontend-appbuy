import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const Register: React.FC = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3, 'First name too short').required('First name is required'),
    lastName: Yup.string().min(3, 'Last name too short').required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required')
  });

  const handleSubmit = (values: SignupFormValues, actions: FormikHelpers<SignupFormValues>) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <View className="flex-1 justify-center px-5 bg-gray-100">
      <Text className="text-center text-xl font-bold mb-5">Sign Up</Text>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '', phoneNumber: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              label="First Name"
              mode="outlined"
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              error={!!(touched.firstName && errors.firstName)}
              className="mb-2"
            />
            <HelperText type="error" visible={!!(touched.firstName && errors.firstName)}>{errors.firstName}</HelperText>

            <TextInput
              label="Last Name"
              mode="outlined"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              error={!!(touched.lastName && errors.lastName)}
              className="mb-2"
            />
            <HelperText type="error" visible={!!(touched.lastName && errors.lastName)}>{errors.lastName}</HelperText>

            <TextInput
              label="Email"
              mode="outlined"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={!!(touched.email && errors.email)}
              className="mb-2"
              keyboardType="email-address"
            />
            <HelperText type="error" visible={!!(touched.email && errors.email)}>{errors.email}</HelperText>

            <TextInput
              label="Password"
              mode="outlined"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={!!(touched.password && errors.password)}
              className="mb-2"
              secureTextEntry
            />
            <HelperText type="error" visible={!!(touched.password && errors.password)}>{errors.password}</HelperText>

            <TextInput
              label="Phone Number"
              mode="outlined"
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              error={!!(touched.phoneNumber && errors.phoneNumber)}
              className="mb-2"
              keyboardType="phone-pad"
            />
            <HelperText type="error" visible={!!(touched.phoneNumber && errors.phoneNumber)}>{errors.phoneNumber}</HelperText>

            <Button mode="contained" onPress={handleSubmit} className="mt-3 bg-red-300b">
              Sign Up
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Register;
