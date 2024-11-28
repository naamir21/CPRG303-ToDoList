import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To Do App</Text>
      {children}
      <Text style={styles.footer}>Developed for CPRG303</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default MainLayout;
