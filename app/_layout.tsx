import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';  // استيراد hook للتنقل
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* صفحة التبويبات */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* صفحة تسجيل الدخول */}
        <Stack.Screen name="login" options={{ headerShown: false }} />

        {/* صفحة مميزات وخدمات */}
        <Stack.Screen name="features-services" options={{ title: "مميزات و خدمات" }} />

        {/* صفحة اتصل بنا */}
        <Stack.Screen name="contact-us" options={{ title: "اتصل بنا" }} />

        {/* صفحة سياسة التطبيق */}
        <Stack.Screen name="privacy-policy" options={{ title: "سياسة التطبيق" }} />

        {/* صفحة مركز الادمان */}
        <Stack.Screen name="addiction-center" options={{ title: "مركز الادمان" }} />

        {/* صفحة الخطأ إذا تم الوصول إلى مسار غير موجود */}
        <Stack.Screen name="+not-found" options={{ title: "Page Not Found" }} />

        {/* الصفحة الرئيسية */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
