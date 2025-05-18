import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

const categories = ['سيارات', 'الخدمات', 'الأجهزة', 'عقارات', 'الكل'];

export default function CategoryTabs() {
  const [selected, setSelected] = useState('الرئيسية');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          onPress={() => setSelected(cat)}
          style={[
            styles.tab,
            selected === cat ? styles.selectedTab : styles.unselectedTab,
          ]}
        >
          <Text
            style={[
              selected === cat ? styles.selectedText : styles.unselectedText,
            ]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 1,
    flexDirection: 'row-reverse', // لجعل النص يبدأ من اليمين

  },
  scrollViewContainer: {
    paddingHorizontal: 10,

  },
  tab: {
    paddingVertical: 3,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginLeft: 8, // التأكد من المسافة بين الأزرار
    justifyContent: 'center',
    alignItems: 'center',

  },
  selectedTab: {
    backgroundColor: '#2EA7BA',
  },
  unselectedTab: {
    backgroundColor: '#EAF2FF',
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16, // حجم الخط
  },
  unselectedText: {
    color: '#2EA7BA',
    fontSize: 14, // حجم الخط
  },
});
