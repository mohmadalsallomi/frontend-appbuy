import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const App = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Syria</Text>

      <Button
        mode="contained"
        onPress={() => router.push('/(tabs)/home')}
        style={styles.button}
      >
        Get Started
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB', // gray-50
    padding: 20,
  },
  heading: {
    fontSize: 24, // text-2xl
    fontWeight: 'bold', // font-bold
    color: '#4B5563', // text-gray-800
    marginBottom: 24, // mb-6
  },
  button: {
    width: '100%',
    backgroundColor: '#3B82F6', // bg-blue-500
    paddingVertical: 12, // p-3
    borderRadius: 8, // rounded-lg
    elevation: 5, // shadow-lg (Android shadow)
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 4 }, // shadow offset for iOS
    shadowOpacity: 0.1, // shadow opacity for iOS
    shadowRadius: 8, // shadow blur radius for iOS
  },
});

export default App;
