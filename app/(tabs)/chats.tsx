import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Chats = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.title}>المحادثات</Text>

      {/* Empty State / Placeholder */}
      <View style={styles.emptyState}>
        <Ionicons name="chatbubble-ellipses-outline" size={64} color="#ccc" />
        <Text style={styles.emptyText}>لا توجد محادثات حالياً</Text>
      </View>
    </ScrollView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2EC8DB',
    marginBottom: 20,
    textAlign: 'right',
    alignSelf: 'stretch',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    alignSelf: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    marginTop: 12,
  },
});
