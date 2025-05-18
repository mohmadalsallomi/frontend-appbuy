import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const AdDetails = () => {
  const params = useLocalSearchParams();
  const ad = typeof params.ad === 'string' ? JSON.parse(params.ad) : null;
  const [adData, setAdData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ad) {
      setAdData(ad);
      setLoading(false);
    }
  }, [ad]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#2EA7BA" />
        <Text style={styles.message}>جارٍ تحميل الإعلان...</Text>
      </View>
    );
  }

  if (!adData) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.message}>الإعلان غير موجود.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {adData.image && (
          <Image source={adData.image} style={styles.image} />
        )}
        <View style={styles.headerIcons}>
          <Ionicons name="heart-outline" size={28} color="#fff" style={styles.icon} />
          <Ionicons name="arrow-back" size={28} color="#fff" style={styles.icon} />
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.title}>{adData.title || "عنوان غير متوفر"}</Text>
        <Text style={styles.price}>{adData.price || "سعر غير متوفر"}</Text>
        {adData.owner && (
          <View style={styles.ownerContainer}>
            {adData.ownerImage && (
              <Image source={adData.ownerImage} style={styles.ownerImage} />
            )}
            <Text style={styles.owner}>{adData.owner}</Text>
          </View>
        )}
      </View>

      <View style={styles.detailsCard}>
        <Text style={styles.sectionTitle}>التفاصيل</Text>
        <Text style={styles.description}>{adData.description || "لا يوجد وصف"}</Text>
      </View>

      <View style={styles.additionalInfoCard}>
        <Text style={styles.sectionTitle}>معلومات إضافية</Text>
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color="#2EA7BA" />
          <Text style={styles.infoText}>{adData.location || "غير محدد"}</Text>
        </View>
        {adData.phone && (
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={20} color="#2EA7BA" />
            <Text style={styles.infoText}>{adData.phone}</Text>
          </View>
        )}
        {adData.time && (
          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={20} color="#2EA7BA" />
            <Text style={styles.infoText}>{adData.time}</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactText}>تواصل مع البائع</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
  },
  headerIcons: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  infoCard: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: -20,
    borderRadius: 12,
    marginHorizontal: 10,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2EA7BA',
  },
  price: {
    fontSize: 22,
    color: '#12a9a5',
    marginBottom: 5,
  },
  ownerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ownerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  owner: {
    fontSize: 18,
    color: '#555',
  },
  detailsCard: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
  additionalInfoCard: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  contactButton: {
    margin: 15,
    backgroundColor: '#2EA7BA',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  },
});

export default AdDetails;
