import { StyleSheet, Text, TouchableOpacity, Modal, FlatList, TextInput, View } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // استيراد الأيقونات

interface CityDropdownProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  cities: string[];
}

export default function CityDropdown({ selectedCity, setSelectedCity, cities }: CityDropdownProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsModalVisible(false);
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* زر "كل المحافظات" */}
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {selectedCity || 'كل المحافظات'}
        </Text>
        <Icon name="chevron-down-outline" size={16} color="#2EA7BA" style={styles.arrowIcon} />
      </TouchableOpacity>

      {/* Modal لإظهار قائمة المدن */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>تصفية المدن</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="بحث"
              placeholderTextColor="#888"
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            <FlatList
              data={filteredCities}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCitySelect(item)} style={styles.cityItem}>
                  <Text style={styles.cityItemText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={styles.applyButton}
            >
              <Text style={styles.applyButtonText}>تطبيق</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
  },
  button: {
    marginLeft: 220,


    borderWidth: 0.2,
    flexDirection: 'row', // ترتيب الأيقونة والنص بجانب بعض
    backgroundColor: '#fff', // خلفية الزر
    borderRadius: 12, // جعل الزر مستدير الأطراف
    paddingVertical: 8, // تقليل التباعد العمودي
    paddingHorizontal: 12, // تقليل التباعد الأفقي
    alignItems: 'center',
    borderWidth: 0.2, 
    borderColor: '#ddd', 
    width: 120, // عرض الزر
    height: 35, // ارتفاع الزر
    justifyContent: 'center', // محاذاة الأيقونة والنص في المنتصف

  },
  buttonText: {
    color: '#333', // لون النص
    fontSize: 14,
    marginRight: 1, // مسافة بين النص والأيقونة

  },
  arrowIcon: {
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // خلفية مظللة
  },
  modalContent: {
    backgroundColor: '#fff',
    textAlign: 'left',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 20,
    width: 300,
    height : 600, // عرض نافذة الـ Modal
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'right',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  cityItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  cityItemText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
    borderBottomWidth: 0.1,
  },
  applyButton: {
    marginTop: 16,
    backgroundColor: '#2EA7BA',
    borderRadius: 8,
    paddingVertical: 12,
  },
  applyButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
