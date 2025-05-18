import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AdCard from './AdCard';  

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

const ads: Ad[] = [
  {
    id: 1,
    title: 'ساعة ذكية',
    price: '2,000 ريال',
    location: 'حصن باهمصر',
    image: require('../../assets/images/th.jpg'),
    time: 'الآن',
    owner: 'Malekh hoder',
    ownerImage: require('../../assets/images/malek.jpg'),
  },
  {
    id: 2,
    title: 'طائرة درون',
    price: '1,500 ريال',
    location: 'بيروت',
    image: require('../../assets/images/th.jpg'),
  },
  {
    id: 3,
    title: 'دراجة جبلية',
    price: '600 ريال',
    location: 'دمشق',
    image: require('../../assets/images/2019-honda-civic-lx-sedan-angular-front.png'),
  },
];

const AdList: React.FC = () => {
  const router = useRouter();

  const handleAdPress = (ad: Ad) => {
    console.log('Navigating to /AdDetails with adId:', ad.id);
    router.push({ pathname: '../pages/AdDetails', params: { ad: JSON.stringify(ad) } });



};

  return (
    <ScrollView style={styles.container}>
      {ads.map((ad) => (
        <TouchableOpacity key={ad.id} onPress={() => handleAdPress(ad)}>
          <AdCard ad={ad} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBlockStart: -25,
  },
});

export default AdList;
