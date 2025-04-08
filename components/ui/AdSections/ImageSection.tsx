import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, Modal, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { ActivityIndicator } from 'react-native-paper';

const ImageSection = ({ images }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImageModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalVisible(true);
  };

  const closeImageModal = () => {
    setIsModalVisible(false);
  };

  const renderImage = (props) => {
    return (
      <Image
        {...props}
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
      />
    );
  };
const renderLoading = () => {
  return (<ActivityIndicator color={'white'} size={'large'} />)
}
const imageViewerUrls = images.map((img) => ({
  props: { source: img }
}));

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      >
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => openImageModal(index)}>
            <Image
              source={image.uri ? { uri: image.uri } : image} // Handle local and remote images
              style={{ width: 300, height: 150, borderRadius: 10, marginRight: 8 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal to show zoomable image */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={closeImageModal}
        style={{backgroundColor:"#fff"}}
      >
        <ImageViewer
          imageUrls={imageViewerUrls} // Pass the correctly formatted imageUrls
          index={selectedImageIndex}
          onSwipeDown={closeImageModal}
          enableSwipeDown={false}
          renderImage={renderImage}
          loadingRender={renderLoading}
          enablePreload={true}
          enableImageZoom={true}
          useNativeDriver={true}
          saveToLocalByLongPress={true}
        />
      </Modal>
    </View>
  );
};

export default ImageSection;
