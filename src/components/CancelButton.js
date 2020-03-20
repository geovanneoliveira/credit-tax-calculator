import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

function CancelButton({onPress:handle}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={handle}
            >
                <Text style={styles.text}>
                    Cancelar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        paddingLeft: 20,
    },
    button:
    {
        borderRadius: 16,
        paddingVertical: 12,
        backgroundColor: '#C8C8D5',
        alignItems: "center",
        width: 160
    },
    text:
    {
        fontSize: 20,
        color: '#FFF'
    }
});

export default CancelButton;