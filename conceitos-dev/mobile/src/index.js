import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import api from './services/api';

const App = () => {
  const [projects, setProjects] = useState([]);

  const addNewProject = async () => {
    const newProject = await (
      await api.post('/projects', {
        title: `Projeto novo ${new Date().getSeconds()}`,
        owner: 'Douglas Lopes',
      })
    ).data;

    setProjects([...projects, newProject]);
  };

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.content}
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: { title, owner } }) => (
            <>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{owner}</Text>
            </>
          )}
        />

        <TouchableOpacity style={styles.button} onPress={addNewProject}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7159c1',
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 50,
    justifyContent: 'center',
    margin: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
