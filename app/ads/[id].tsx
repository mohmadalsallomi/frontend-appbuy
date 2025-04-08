import { useLocalSearchParams } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useState } from "react";
import { useAdDetails } from "@/hooks/useAdDetails";
import ImageSection from "@/components/ui/AdSections/ImageSection";
import AdDetails from "@/components/ui/AdSections/AdDetails";
import ActionButton from "@/components/ui/ActionButton";



export default function AdDetail() {
  const { id } = useLocalSearchParams();
  
  const ad = {
    id: id,
    images: [require("../../assets/images/2019-honda-civic-lx-sedan-angular-front.png"),require("../../assets/images/Logo.png")],
    title: "Used Honda Civic 2015",
    price: "35,000 AED",
    description:
      "Well-maintained car, single owner, accident free. Available for immediate sale.",
    location: "Dubai, UAE",
    date: "2025-04-06",
    whatsappNumber: "+971501234567",
    phoneNumber: "+971501234567",
  };

  const { liked, toggleLike, openWhatsApp, callSeller, chatInApp } = useAdDetails(ad);

  return (
    <ScrollView className="p-4 bg-gray-50 flex-1">
      <ImageSection images={ad.images} />
      
      <View className="flex-row justify-between items-center mb-2">
        <AdDetails 
          title={ad.title}
          price={ad.price}
          description={ad.description}
          location={ad.location}
          date={ad.date}
        />
        <TouchableOpacity onPress={toggleLike}>
          <FontAwesome
            name={liked ? "heart" : "heart-o"}
            size={22}
            color={liked ? "#2EA7BA" : "gray"}
          />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-around space-x-2">
        <ActionButton
          icon={<FontAwesome name="whatsapp" size={16} color="white" />}
          color="bg-green-500"
          onPress={openWhatsApp}
          title="WhatsApp"
        />
        <ActionButton
          icon={<Feather name="phone-call" size={16} color="white" />}
          color="bg-blue-500"
          onPress={callSeller}
          title="Call"
        />
        <ActionButton
          icon={<Ionicons name="chatbubble-ellipses-outline" size={16} color="white" />}
          color="bg-gray-800"
          onPress={chatInApp}
          title="In App"
        />
      </View>
    </ScrollView>
  );
}
