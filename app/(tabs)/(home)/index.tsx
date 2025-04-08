import AdList from '@/components/ui/AdList';
import CategoryTabs from '@/components/ui/CategoryTabs';
import CityDropdown from '@/components/ui/CityDropdown';
import FilterButton from '@/components/ui/FilterButton';
import Header from '@/components/ui/header';
import FilterModal from '@/components/ui/modals/FilterModal';
import SearchBar from '@/components/ui/SearchBar';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { View, ScrollView, StatusBar, Button, Text } from 'react-native';


export default function Home() {
  const [selectedCity, setSelectedCity] = useState('');
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  const [modalVisible, setModalVisible] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});
  const navigation = useNavigation();

  const toggleFilterModal = () => {
    setModalVisible(!modalVisible);
  };

  const applyFilters = (filters) => {
    setAppliedFilters(filters);
    // Handle the applied filters here (e.g., update your ads based on the filters)
    console.log(filters);
  };
  return (
    <ScrollView className='bg-gray-100 mt-10'>
      <Header />
      <SearchBar />
      <CategoryTabs />
      <CityDropdown
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        cities={cities}
      />
       <View style={{ flex: 1, padding: 20 }}>
       <FilterButton onPress={toggleFilterModal} />

      <View>
        <Text>Showing ads with the following filters:</Text>
        <Text>Newest: {appliedFilters.newest ? 'Yes' : 'No'}</Text>
        <Text>By Price: {appliedFilters.byPrice ? 'Yes' : 'No'}</Text> 
      
      </View>

      <FilterModal visible={modalVisible} onClose={toggleFilterModal} onApplyFilters={applyFilters} />
    </View>
      <AdList />
    </ScrollView>
  );
}
