import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
    }}>
      <TouchableOpacity>
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>
      <Image source={require('../../assets/images/react-logo.png')} style={{ width: 100, height: 30 }} resizeMode="contain" />
      <TouchableOpacity>
        <Ionicons name="person-circle-outline" size={28} />
      </TouchableOpacity>
    </View>
  );
}
