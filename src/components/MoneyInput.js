import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

function MoneyInput({ value, onChange, ...props }) {


    function handleChange(newValue) {
        onChange(newValue.replace('R$ ', '').replace(',', '').replace('.', ''));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Valor à vista
            </Text>
            <TextInputMask style={styles.input}
                type={'money'}
                options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$ ',
                    suffixUnit: ''
                }}
                value={value}
                onChangeText={handleChange}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            borderBottomWidth: 2,
            borderBottomColor: '#64AA9E',
            margin: 40,

        },
        input:
        {
            fontSize: 36,

        },
        label:
        {
            color: '#64AA9E',
            fontSize: 18,

        }
    })

export default MoneyInput;