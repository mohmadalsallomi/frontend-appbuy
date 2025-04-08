// hooks/useAdDetails.ts
import { useState } from "react";
import { Alert, Linking } from "react-native";

export const useAdDetails = (ad: {
  title: string;
  whatsappNumber: string;
  phoneNumber: string;
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked((prev) => !prev);

  const openWhatsApp = () => {
    const message = `Hi, I'm interested in your ad: ${ad.title}`;
    const url = `https://wa.me/${ad.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", "Unable to open WhatsApp")
    );
  };

  const callSeller = () => {
    const url = `tel:${ad.phoneNumber}`;
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", "Unable to make a call")
    );
  };

  const chatInApp = () => {
    Alert.alert("Chat In App", "Navigating to internal chat...");
    // router.push(`/chat/${id}`);
  };

  return { liked, toggleLike, openWhatsApp, callSeller, chatInApp };
};
