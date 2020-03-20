import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

function TaxInput({ value, onChange, title }) {

    const [isFocused, setIsFocused] = React.useState(false);

    function handleChange(newValue) {
        onChange(newValue.replace('%', '').replace(',', '').replace('.', ''));
    }

    return (
        <View style={[styles.container, { borderBottomColor: isFocused ? '#64AA9E' : '#C8C8C5' }]}>
            <Text style={styles.label}>
                {title}
            </Text>
            <TextInputMask style={styles.input}
                type={'money'}
                options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: '%'
                }}
                value={value}
                onChangeText={handleChange}
                onFocus={() => { setIsFocused(true) }}
                onBlur={() => { setIsFocused(false) }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        borderBottomWidth: 2,
        marginHorizontal: 40,
        marginVertical: 20,

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
});

export default TaxInput;