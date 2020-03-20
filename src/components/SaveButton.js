import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

function SaveButton({onPress:handle}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={handle}
            >
                <Text style={styles.text}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        paddingRight: 20,
    },
    button:
    {
        borderRadius: 16,
        paddingVertical: 12,
        backgroundColor: '#64AA9E',
        alignItems: "center",
        width: 130
    },
    text:
    {
        fontSize: 20,
        color: '#FFF'
    }

});

export default SaveButton;