import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      {/* عنوان المفضلة */}
      <Text style={styles.title}>المفضلة</Text>

      {/* زر المفضلة في منتصف الشاشة */}
      <View style={styles.centeredIcon}>
        <TouchableOpacity style={styles.favoriteButton}>
          <Icon name="heart-outline" size={60} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* لا يوجد قسم للأيقونات في الأسفل الآن */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2EA7BA',
    marginBottom: 20,
  },
  centeredIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  favoriteButton: {
    backgroundColor: '#2EA7BA',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});

export default FavoritesScreen;
