import { View } from 'react-native';
import AdCard from './AdCard';

// Dummy ads
const ads = [
  {
    id: 1,
    title: 'Honda Civic 2019',
    price: '$12,000',
    location: 'Edlib',
    image: require('../../assets/images/2019-honda-civic-lx-sedan-angular-front.png'),
  },
  {
    id: 2,
    title: '2 BHK Apartment',
    price: '$850/mo',
    location: 'Los Angeles',
    image: require('../../assets/images/th.jpg'),
  },
  {
    id: 3,
    title: '2 BHK Apartment',
    price: '$850/mo',
    location: 'Los Angeles',
    image: require('../../assets/images/th.jpg'),
  },
];

export default function AdList() {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      {ads.map(ad => <AdCard key={ad.id} ad={ad} />)}
    </View>
  );
}
