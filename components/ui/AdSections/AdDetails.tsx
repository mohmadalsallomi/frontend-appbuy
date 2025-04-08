import React from 'react';
import { Text, View } from 'react-native';

const AdDetails = ({ title, price, description, location, date }) => {
  return (
    <View>
      <Text className="text-2xl font-bold flex-1">{title}</Text>
      <Text className="text-xl text-green-600 font-semibold mb-2">{price}</Text>
      <Text className="text-base text-gray-700 mb-6">{description}</Text>
      <Text className="text-base text-gray-600 mb-2">
        <Text className="font-semibold">Location: </Text>{location}
      </Text>
      <Text className="text-base text-gray-600 mb-6">
        <Text className="font-semibold">Date: </Text>{date}
      </Text>
    </View>
  );
};

export default AdDetails;
