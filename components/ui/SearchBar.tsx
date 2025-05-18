import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="البحث في سوقنا"
        placeholderTextColor="#888"  // تغيير لون النص عند عدم الكتابة
        style={styles.input} 
      />
      <Ionicons name="search" size={20} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',  // لجعل العناصر تبدأ من اليمين لليسار
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // خلفية بيضاء
    marginHorizontal: 16,
    marginVertical: 18,
    padding: 12,  // زيادة التباعد داخل مربع البحث

    borderRadius:12,  // جعل الحواف دائرية بشكل أكبر
    shadowColor: '#000', // إضافة ظل
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  icon: {
    marginLeft: 10, // زيادة المسافة بين الأيقونة والنص
    color: '#888', // لون الأيقونة الرمادي
  },
  input: {
    flex: 1,
    fontSize: 16, // حجم الخط أكبر قليلا
    color: '#333', // لون النص داخل مربع البحث
    paddingVertical: 0, // إزالة التباعد العمودي
    textAlign: 'right', // محاذاة النص لليمين
    paddingRight: 10, // إضافة تباعد من اليمين
  },
});
