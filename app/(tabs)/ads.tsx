import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { I18nManager } from 'react-native';

I18nManager.forceRTL(true); // Ensure Right-to-Left layout

const AdsScreen = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('SYP');
  const [category, setCategory] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleImagePicker = () => {
    // Placeholder for image picker logic
  };

  const handleSubmit = () => {
    console.log({
      title,
      details,
      price,
      currency,
      category,
      governorate,
      imageUri,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>رفع اعلان</Text>

      {/* Title */}
      <Text style={styles.label}>العنوان</Text>
      <TextInput
        style={styles.input}
        placeholder="عنوان الإعلان"
        value={title}
        onChangeText={setTitle}
      />

      {/* Details */}
      <Text style={styles.label}>التفاصيل</Text>
      <TextInput
        style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
        placeholder="تفاصيل الإعلان"
        multiline
        value={details}
        onChangeText={setDetails}
      />

      {/* Price and Currency */}
      <Text style={styles.label}>السعر والعمله</Text>
      <View style={styles.currencyContainer}>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setCurrency('USD')}
          >
            <View style={styles.radioCircle}>
              {currency === 'USD' && <View style={styles.selectedRb} />}
            </View>
            <Text>دولار</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setCurrency('SYP')}
          >
            <View style={styles.radioCircle}>
              {currency === 'SYP' && <View style={styles.selectedRb} />}
            </View>
            <Text>ل.س</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={[styles.input, styles.priceInput]}
          placeholder="السعر"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
      </View>

      {/* Category and Governorate */}
      <View style={styles.row}>
        <View style={styles.half}>
          <Text style={styles.label}>الفئة</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={category}
              onValueChange={setCategory}
              style={styles.picker}
            >
              <Picker.Item label="اختر الفئة" value="" />
              <Picker.Item label="إلكترونيات" value="electronics" />
              <Picker.Item label="ملابس" value="clothes" />
              <Picker.Item label="عقارات" value="realestate" />
            </Picker>
          </View>
        </View>

        <View style={styles.half}>
          <Text style={styles.label}>المحافظة</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={governorate}
              onValueChange={setGovernorate}
              style={styles.picker}
            >
              <Picker.Item label="اختر المحافظة" value="" />
              <Picker.Item label="دمشق" value="Damascus" />
              <Picker.Item label="حلب" value="Aleppo" />
            </Picker>
          </View>
        </View>
      </View>

      {/* Image Picker */}
      <Text style={styles.label}>صور الاعلان</Text>
      <TouchableOpacity style={styles.imageBox} onPress={handleImagePicker}>
        <Icon name="image-outline" size={40} color="#2EA7BA" />
        <Text style={styles.imageText}>اضغط لإضافة صور</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>رفع الإعلان</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2EA7BA',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 35, // إضافة مسافة أعلى العنوان
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'right',
    marginRight: 10, // إضافة مسافة بين النص والحافة
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    height: 45,
    marginBottom: 15,
    textAlign: 'right',
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioGroup: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 15,  // زيادة الفجوة بين الأزرار
  },
  radioButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginRight: 15, // زيادة المسافة بين الأزرار
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2EA7BA',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2EA7BA',
  },
  priceInput: {
    flex: 1,
    marginRight: 15,
  },
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  half: {
    width: '48%',
    marginBottom: 15, // زيادة المسافة بين الحقول
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    overflow: 'hidden',
  },
  picker: {
    height: Platform.OS === 'android' ? 50 : undefined,
    width: '100%'
,
  },
  imageBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageText: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#2EA7BA',
    paddingVertical: 12,
    borderRadius:10,
    alignItems: 'center',
    marginTop: 20, // مسافة أعلى الزر
    marginBottom: 40, // مسافة أسفل الزر
  },
  submitText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AdsScreen;
