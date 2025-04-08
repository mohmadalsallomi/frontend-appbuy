import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ActionButton = ({ icon, color, onPress, title }) => {
  return (
    <TouchableOpacity
      className={`px-4 py-2 rounded-full flex-row items-center space-x-1 ${color}`}
      onPress={onPress}
    >
      {icon}
      <Text className="text-white text-sm font-medium">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
