// components/ui/CityDropdown.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

interface CityDropdownProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  cities: string[];
}

export default function CityDropdown({ selectedCity, setSelectedCity, cities }: CityDropdownProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Button to show the modal */}
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{selectedCity || 'Select a city'}</Text>
      </TouchableOpacity>

      {/* Modal to display city list */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select City</Text>
            <FlatList
              data={cities}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCitySelect(item)} style={styles.cityItem}>
                  <Text style={styles.cityItemText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cityItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  cityItemText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    paddingVertical: 12,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
