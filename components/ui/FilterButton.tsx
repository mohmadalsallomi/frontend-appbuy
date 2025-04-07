import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons (you can choose other icons as well)

interface FilterButtonProps {
  onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.buttonContent}>
        <Icon name="filter" size={20} color="#000000B2" />  {/* Using filter icon */}
        <Text style={styles.buttonText}>Filter</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 25, // Round the button
    width: 100, // Minimized width
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonContent: {
    flexDirection: 'row', // Place the icon and text side by side
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000B2',
    marginLeft: 8, // Space between icon and text
    fontSize: 16,
  },
});

export default FilterButton;
