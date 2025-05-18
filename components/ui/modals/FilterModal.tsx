import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: { newest: boolean; byPrice: boolean }) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    newest: false,
    byPrice: false,
  });

  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const [isFilterApplied, setIsFilterApplied] = useState(false);  // حالة للتأكد إذا كانت الفلاتر مفعلة

  const handleFilterApplied = (filters: { newest: boolean; byPrice: boolean }) => {
    setIsFilterApplied(filters.newest || filters.byPrice);  // تحقق من الفلاتر إذا كانت مفعلة
    onApplyFilters(filters);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Filter Ads</Text>
          
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox status={filters.newest ? 'checked' : 'unchecked'} onPress={() => handleFilterChange('newest')} />
              <Text>Newest</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox status={filters.byPrice ? 'checked' : 'unchecked'} onPress={() => handleFilterChange('byPrice')} />
              <Text>By Price</Text>
            </View>
          </View>


          <TouchableOpacity onPress={() => handleFilterApplied(filters)} style={{ marginTop: 20, backgroundColor: '#007bff', padding: 10, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Apply Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={{ marginTop: 10, alignItems: 'center' }}>
            <Text style={{ color: 'red' }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
