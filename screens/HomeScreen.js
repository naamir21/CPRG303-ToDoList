import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../Components/ToDoList';
import ToDoForm from '../Components/ToDoForm';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (task) => {
    if (task && !tasks.includes(task)) {
      setTasks([...tasks, task]);
    }
  };

  return (
    <MainLayout>
      <View style={styles.content}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to the About Page" onPress={() => navigation.navigate('About')} />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 80,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
  },
});

export default HomeScreen;
