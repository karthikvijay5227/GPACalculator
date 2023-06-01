import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';

const CourseView = ({ onUpdateCourse, onDeleteCourse }) => {
    const [selectedCredits, setSelectedCredits] = useState('Select');
    const [selectedGrade, setSelectedGrade] = useState('Select');

    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        if (!isVisible) {
            onDeleteCourse();
        }
    }, [isVisible]);

    useEffect(() => {
        onUpdateCourse(selectedCredits, selectedGrade);
    }, [selectedCredits, selectedGrade]);

    if (!isVisible) {
        return null;
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Theory/Lab/Seminar/Project</Text>
                <Button onPress={handleDelete} textColor="red">
                    Remove
                </Button>
            </View>
            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>No of Credits</Text>
                <Picker
                    selectedValue={selectedCredits}
                    onValueChange={(itemValue) => setSelectedCredits(itemValue)}
                    style={styles.dropdown}
                    dropdownIconColor="black"
                >
                    <Picker.Item label="Select" value={-1} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="6" value={6} />
                </Picker>
            </View>
            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>Grade</Text>
                <Picker
                    selectedValue={selectedGrade}
                    onValueChange={(itemValue) => setSelectedGrade(itemValue)}
                    style={styles.dropdown}
                    dropdownIconColor="black"
                >
                    <Picker.Item label="Select" value={-1} />
                    <Picker.Item label="S" value={10.0} />
                    <Picker.Item label="A+" value={9.0} />
                    <Picker.Item label="A" value={8.5} />
                    <Picker.Item label="B+" value={8.0} />
                    <Picker.Item label="B" value={7.5} />
                    <Picker.Item label="C+" value={7.0} />
                    <Picker.Item label="C" value={6.5} />
                    <Picker.Item label="D" value={6.0} />
                    <Picker.Item label="P" value={5.5} />
                    <Picker.Item label="F" value={0} />
                    <Picker.Item label="FE" value={0} />
                    <Picker.Item label="I" value={0} />
                </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: '95%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    dropdownContainer: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    dropdown: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        paddingHorizontal: 10,
        color: 'black',
    },
});

export default CourseView;
