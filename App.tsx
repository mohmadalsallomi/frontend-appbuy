import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdList from '../frontend-appbuy/components/ui/AdList';  // المسار الصحيح هنا
import AdDetails from '../frontend-appbuy/app/pages/AdDetails';  // المسار الصحيح هنا

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdList">
        <Stack.Screen
          name="AdList"
          component={AdList}
          options={{ title: 'الإعلانات' }}
        />
        <Stack.Screen
          name="AdDetails"
          component={AdDetails}
          options={{ title: 'تفاصيل الإعلان' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
