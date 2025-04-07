import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

const categories = ['Cars', 'Real Estate', 'Electronics', 'Furniture'];

export default function CategoryTabs() {
  const [selected, setSelected] = useState('Cars');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          onPress={() => setSelected(cat)}
          style={[
            styles.tab,
            selected === cat ? styles.selectedTab : styles.unselectedTab
          ]}
        >
          <Text style={selected === cat ? styles.selectedText : styles.unselectedText}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 9999,
    marginRight: 8,
  },
  selectedTab: {
    backgroundColor: '#2EA7BA',
  },
  unselectedTab: {
    backgroundColor: '#EAF2FF',
  },
  selectedText: {
    color: 'white',
  },
  unselectedText: {
    color: '#2EA7BA',
  },
});
