import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

interface Ad {
  id: number;
  title: string;
  price: string;
  location: string;
  image: any;
  time?: string;
  owner?: string;
  ownerImage?: any;
  description?: string;
}

interface AdCardProps {
  ad: Ad;
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  const router = useRouter();

  const handlePress = () => {
    // Navigate to the AdDetails page with the ad data as a parameter
    router.push({
      pathname: '/pages/AdDetails',
      params: { ad: JSON.stringify(ad) },
    });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <Image
        source={typeof ad.image === 'string' ? { uri: ad.image } : ad.image}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{ad.title}</Text>
        <View style={styles.rowGroup}>
          <View style={styles.row}>
            <Icon name="location-outline" size={16} color="#666" style={styles.icon} />
            <Text style={styles.text}>{ad.location}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="time-outline" size={16} color="#666" style={styles.icon} />
            <Text style={styles.text}>{ad.time}</Text>
          </View>
        </View>
        <View style={styles.ownerRow}>
          <Text style={styles.ownerName}>{ad.owner}</Text>
          <Image source={ad.ownerImage} style={styles.ownerImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row-reverse',
    marginBottom: 8,
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 6,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#2EA7BA',
    marginBottom: 2,
    textAlign: 'right',
  },
  rowGroup: {
    marginBottom: 2,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 2,
  },
  icon: {
    marginLeft: 2,
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  ownerRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 2,
  },
  ownerImage: {
    width: 24,
    height: 24,
    borderRadius: 16,
    marginLeft: 10,
    marginEnd: 6,
  },
  ownerName: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
});

export default AdCard;
