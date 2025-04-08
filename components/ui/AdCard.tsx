import { useRouter } from 'expo-router';
import { View, Text, Image, Pressable } from 'react-native';

export default function AdCard({ ad }:any) {

  const router = useRouter();

  const handlePress = () => {
    router.push(`/ads/${ad.id}`);
  };
  return (
    <Pressable onPress={handlePress}  style={{
      flexDirection: 'row',
      marginBottom: 16,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      elevation: 2
    }}>
      <Image source={typeof ad.image === 'string' ? { uri: ad.image } : ad.image} style={{ width: 100, height: 100, borderRadius: 10 }} />
      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{ad.title}</Text>
        <Text>{ad.price}</Text>
        <Text style={{ color: '#666' }}>{ad.location}</Text>
      </View>
    </Pressable >
  );
}
