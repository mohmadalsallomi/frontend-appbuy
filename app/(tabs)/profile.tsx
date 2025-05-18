import { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen: React.FC = () => {
  const [name, setName] = useState('male15ld');
  const [location, setLocation] = useState('حمص بالاعمار');
  const [phone, setPhone] = useState('70549144');
  const [bio, setBio] = useState('تاجر أدوات تكنولوجيا');
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const [imageUri, setImageUri] = useState(require('../../assets/images/malek.jpg')); // Default image

  const handleEditProfile = () => setIsEditModalVisible(true);
  const handleSaveChanges = () => {
    setIsEditModalVisible(false);
    console.log('Changes saved');
  };

  // Function to pick image from gallery or camera
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("يجب السماح بالوصول للصور لتغيير الصورة الشخصية");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageUri({ uri: result.assets[0].uri });
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
          <Image source={imageUri} style={styles.profileImage} />
          <View style={styles.cameraIcon}>
            <Ionicons name="camera" size={18} color="#fff" />
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
          <Ionicons name="create-outline" size={16} color="#fff" />
          <Text style={styles.editButtonText}>تعديل</Text>
        </TouchableOpacity>
      </View>

      {/* Info Rows */}
      <View style={styles.infoBox}>
        <Ionicons name="call" size={18} color="#2EA7BA" />
        <Text style={styles.infoText}>رقم الهاتف: {phone}</Text>
      </View>
      <View style={styles.infoBox}>
        <Ionicons name="location" size={18} color="#2EA7BA" />
        <Text style={styles.infoText}>الموقع: {location}</Text>
      </View>

      {/* Ads Section */}
      <Text style={styles.adsTitle}>آخر الإعلانات</Text>
      {[1, 2, 3].map((item) => (
        <View key={item} style={styles.adCard}>
          <Image source={require('../../assets/images/Logo.png')} style={styles.adImage} />
          <View style={styles.adDetails}>
            <Text style={styles.adTitle}>ساعة ذكية</Text>
            <Text style={styles.adSub}>حمص بالاعمار - الآن</Text>
          </View>
        </View>
      ))}

      {/* Edit Modal */}
      <Modal
        visible={isEditModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsEditModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.editModal}>
            <ScrollView>
              <TextInput label="اسم المستخدم" value={name} onChangeText={setName} style={styles.input} />
              <TextInput label="رقم الهاتف" value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
              <TextInput label="نبذة" value={bio} onChangeText={setBio} style={styles.input} />
              <Text style={styles.label}>المحافظة</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={location}
                  onValueChange={setLocation}
                  style={styles.picker}
                >
                  <Picker.Item label="اختر المحافظة" value="" />
                  <Picker.Item label="حمص" value="حمص" />
                  <Picker.Item label="دمشق" value="دمشق" />
                  <Picker.Item label="حلب" value="حلب" />
                </Picker>
              </View>

              <Button mode="contained" onPress={handleSaveChanges} style={styles.saveButton}>
                حفظ التغييرات
              </Button>
              <Button mode="outlined" onPress={() => setIsEditModalVisible(false)} style={styles.cancelButton}>
                إلغاء
              </Button>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileCard: {
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 14,
    backgroundColor: '#F9F9F9',
    elevation: 3,
    marginBottom: 20,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: '#2EA7BA',
    borderWidth: 2,
    marginBottom: 10,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#2EA7BA',
    borderRadius: 12,
    padding: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E2E2E',
  },
  bio: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#2EA7BA',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    gap: 6,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  infoBox: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#444',
    marginRight: 10,
  },
  adsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'right',
  },
  adCard: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  adImage: {
    width: 55,
    height: 55,
    borderRadius: 8,
    marginLeft: 15,
  },
  adDetails: {
    flex: 1,
  },
  adTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  adSub: {
    fontSize: 13,
    color: '#777',
    textAlign: 'right',
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editModal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 14,
    width: '90%',
    maxHeight: '90%',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  picker: {
    height: Platform.OS === 'ios' ? 150 : 50,
  },
  saveButton: {
    backgroundColor: '#2EA7BA',
    marginTop: 10,
  },
  cancelButton: {
    marginTop: 10,
  },
});
