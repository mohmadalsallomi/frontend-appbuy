import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';

const FilterModal = ({ visible, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    newest: false,
    byPrice: false,
    // Add other filters here
  });

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
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
              <Checkbox value={filters.newest} onValueChange={() => handleFilterChange('newest')} />
              <Text>Newest</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox value={filters.byPrice} onValueChange={() => handleFilterChange('byPrice')} />
              <Text>By Price</Text>
            </View>
            {/* Add more filters as needed */}
          </View>
          
          <TouchableOpacity onPress={handleApply} style={{ marginTop: 20, backgroundColor: '#007bff', padding: 10, alignItems: 'center' }}>
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