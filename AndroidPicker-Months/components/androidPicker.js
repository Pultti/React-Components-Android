import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import months from './months';



export default function AndroidPicker({ month, setSelectedMonth }) {
    return (
        <Picker
            style={styles.picker}
            selectedValue={month}
            onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)
            }>
            {
                months.map(month => (
                    <Picker.Item
                        key={month.value}
                        style={styles.item}
                        label={month.label}
                        value={month.value}
                    />
                ))
            }
        </Picker>
    );
}

const styles = StyleSheet.create({
    picker: {
        width: '100%',
    },
    item: {
        fontSize: 16,
        color: 'black',
    }
});