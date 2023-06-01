import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DropdownMenu() {
    const [selectedCredit, setSelectedCredit] = useState('Select');
    const [selectedGrade, setSelectedGrade] = useState('Select');

    const handleCreditChange = (option) => {
        setSelectedCredit(option);
    };

    const handleGradeChange = (option) => {
        setSelectedGrade(option);
    };

    return (
        <View style={styles.inputContainer}>
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedCredit}
                    onValueChange={handleCreditChange}
                >
                    <Picker.Item label="Select" value="Select" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="6" value="6" />
                </Picker>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedGrade}
                    onValueChange={handleGradeChange}
                >
                    <Picker.Item label="Select" value="Select" />
                    <Picker.Item label="S" value="S" />
                    <Picker.Item label="A+" value="A+" />
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="B+" value="B+" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="C+" value="C+" />
                    <Picker.Item label="C" value="C" />
                    <Picker.Item label="D" value="D" />
                    <Picker.Item label="P" value="P" />
                    <Picker.Item label="F" value="F" />
                    <Picker.Item label="FE" value="FE" />
                    <Picker.Item label="I" value="I" />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        width: '90%',
        paddingHorizontal: 20,
        // backgroundColor: '#bbd1f2',
        paddingVertical: 10,
        color: "black",
        borderRadius: 10,
        justifyContent: 'space-between',
        marginRight: 10,
    },

    pickerContainer: {
        flex: 1,
        color: "black",
    },

    picker: {
        width: '100%',
        color: "black",
    },
});
