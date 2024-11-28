import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const today = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>App Name: To Do App</Text>
        <Text style={styles.text}>Created by: Nida Aamir</Text>
        <Text style={styles.text}>Date: November 28, 2024</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
    fontSize: 18,
    marginBottom: 10,
    },
});

export default AboutScreen;
