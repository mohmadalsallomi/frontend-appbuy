import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      margin: 16,
      padding: 10,
      borderRadius: 10
    }}>
      <Ionicons name="search" size={20} style={{ marginRight: 8 }} />
      <TextInput placeholder="Search items..." style={{ flex: 1 }} />
    </View>
  );
}
