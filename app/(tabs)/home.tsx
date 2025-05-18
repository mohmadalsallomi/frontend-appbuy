import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';
import AdList from '@/components/ui/AdList';
import CategoryTabs from '@/components/ui/CategoryTabs';
import CityDropdown from '@/components/ui/CityDropdown';
import FilterButton from '@/components/ui/FilterButton';
import Header from '@/components/ui/header';
import FilterModal from '@/components/ui/modals/FilterModal';
import SearchBar from '@/components/ui/SearchBar';

export default function Home() {
  const [selectedCity, setSelectedCity] = useState('');
  const cities = ['دمشق', 'ادلب', 'حلب', 'ديرالزور', 'حمص', 'طرطوس', 'اللاذقية', 'حماة', 'الرقة', 'درعا', 'القنيطرة', 'السويداء', 'ريف دمشق'];
  
  const [modalVisible, setModalVisible] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});
  const navigation = useNavigation();

  const toggleFilterModal = () => {
    setModalVisible(!modalVisible);
  };

  const applyFilters = (filters: Record<string, any>) => {
    setAppliedFilters(filters); // تعيين الفلاتر المطبقة
    console.log(filters);
  };

  return (
    <>
      {/* تعيين شريط الحالة ليظهر باللون الفاتح */}
      <StatusBar style="dark" backgroundColor="#fff" />
      
      <ScrollView style={{ backgroundColor: '#fff', marginTop: 10 }}>

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
          <FilterModal 
            visible={modalVisible} 
            onClose={toggleFilterModal} 
            onApplyFilters={applyFilters} 
          />
        </View>
        
        {/* تمرير الفلاتر المطبقة إلى AdList */}
        <AdList filters={appliedFilters} />
      </ScrollView>
    </>
  );
}
