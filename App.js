import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Alert, Modal } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CourseView from './components/CourseView';

export default function App() {
  const [courseViews, setCourseViews] = useState([]);
  const [creditsArray, setCreditsArray] = useState([]);
  const [gradesArray, setGradesArray] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [sgpa, setSGPA] = useState(null);

  const handlePress = () => {
    setCourseViews([...courseViews, {}]);
    setCreditsArray([...creditsArray, 'Select']);
    setGradesArray([...gradesArray, 'Select']);
  };

  const handleUpdateCourse = (index, credits, grade) => {
    const newCreditsArray = [...creditsArray];
    const newGradesArray = [...gradesArray];

    newCreditsArray[index] = credits;
    newGradesArray[index] = grade;

    setCreditsArray(newCreditsArray);
    setGradesArray(newGradesArray);
  };

  const handleDeleteCourse = (index) => {
    const newCreditsArray = [...creditsArray];
    const newGradesArray = [...gradesArray];

    newCreditsArray.splice(index, 1);
    newGradesArray.splice(index, 1);

    setCreditsArray(newCreditsArray);
    setGradesArray(newGradesArray);
  };

  const calculateSGPA = () => {
    let gradeSum = 0;
    let creditSum = 0;

    for (let i = 0; i < creditsArray.length; i++) {
      if (creditsArray[i] !== 'Select' && gradesArray[i] !== 'Select') {
        creditSum += parseInt(creditsArray[i]);
        gradeSum += parseFloat(gradesArray[i]) * parseInt(creditsArray[i]);
      }
    }

    const sgpa = gradeSum / creditSum;
    setSGPA(sgpa.toFixed(1));
    setModalVisible(true);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Appbar.Header style={styles.topBar}>
          <Appbar.Content title="SGPA Calculator" titleStyle={styles.title} />
        </Appbar.Header>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>+ Add Course</Text>
          </TouchableOpacity>

          {courseViews.map((_, index) => (
            <CourseView
              key={index}
              onUpdateCourse={(credits, grade) => handleUpdateCourse(index, credits, grade)}
              onDeleteCourse={() => handleDeleteCourse(index)}
            />
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.floating} onPress={calculateSGPA}>
          <Text style={styles.floatingText}>Calculate SGPA</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Your SGPA</Text>
              <Text style={styles.modalText}>SGPA: {sgpa}</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce6f5',
    alignItems: 'center',
  },
  topBar: {
    width: '100%',
    backgroundColor: '#9db8e0',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    marginLeft: 15,
  },
  button: {
    backgroundColor: '#5887fc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 25,
    marginRight: '60%',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  floating: {
    backgroundColor: '#97f26f',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 25,
    position: 'absolute',
    bottom: 40,
    right: 20,
    color: 'black',
  },
  floatingText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"black",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color:"black",
  },
  modalButton: {
    backgroundColor: '#f75252',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  modalButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
