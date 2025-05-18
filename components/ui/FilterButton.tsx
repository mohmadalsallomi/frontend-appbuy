import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Modal, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // استيراد الأيقونات

interface FilterButtonProps {
  onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onPress }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [filters, setFilters] = useState({
    price: '',
    date: ''
  });

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const applyFilter = (type: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <View style={styles.container}>
      {/* زر "تصفية" */}
      <TouchableOpacity onPress={toggleModal} style={styles.filterButtonPrimary}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>تصفية</Text>
          <Icon name="filter" size={22} color="#2EA7BA" style={styles.filterIcon} />
        </View>
      </TouchableOpacity>

      {/* Modal لإظهار خيارات التصفية */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>خيارات التصفية</Text>

            {/* تصفية حسب السعر */}
            <View style={styles.filterOption}>
              <Text style={styles.optionText}>تصفية حسب السعر</Text>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => applyFilter('price', 'lowToHigh')}
              >
                <Text style={styles.filterButtonText}>منخفض إلى مرتفع</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => applyFilter('price', 'highToLow')}
              >
                <Text style={styles.filterButtonText}>مرتفع إلى منخفض</Text>
              </TouchableOpacity>
            </View>

            {/* تصفية حسب التاريخ */}
            <View style={styles.filterOption}>
              <Text style={styles.optionText}>تصفية حسب التاريخ</Text>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => applyFilter('date', 'newest')}
              >
                <Text style={styles.filterButtonText}>الأحدث أولًا</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => applyFilter('date', 'oldest')}
              >
                <Text style={styles.filterButtonText}>الأقدم أولًا</Text>
              </TouchableOpacity>
            </View>

            {/* زر إغلاق */}
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>إغلاق</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* عرض الفلاتر المختارة */}
      {filters.price || filters.date ? (
        <Text style={styles.filtersText}>
          
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBlockStart: -68,

marginLeft: 5,
   

  },
  filterButtonPrimary: {
    backgroundColor: '#fff',
    borderRadius: 12, // جعل الزر مستدير الأطراف
    paddingVertical: 6, // تقليل التباعد العمودي
    paddingHorizontal: 14, // تقليل التباعد الأفقي
    alignItems: 'center',
    flexDirection: 'row', // ترتيب الأيقونة والنص بجانب بعض
    borderWidth: 0.3, // إضافة حدود للزر
    borderColor: '#ddd', // لون الحدود

  },
  buttonContent: {
    flexDirection: 'row', // ترتيب الأيقونة والنص بجانب بعض
    alignItems: 'center',
  },
  buttonText: {
    color: '#333', // لون النص
    fontSize: 14,
    marginRight: 2, // مسافة بين النص والأيقونة
  },
  filterIcon: {
    marginLeft: 8,
  // مسافة بين الأيقونة والنص
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // خلفية مظللة
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    maxHeight: '80%',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterOption: {
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  filterButtonText: {
    fontSize: 14,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#2EA7BA',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  filtersText: {
    fontSize: 16,
    color: '#2EA7BA',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default FilterButton;
