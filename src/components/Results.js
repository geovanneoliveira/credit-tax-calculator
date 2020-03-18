import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Results({ data }) {

    return (
        <View style={styles.container}>
            {data.map((item) => (
                <View style={styles.item} key={item.id}>
                    <Text style={styles.label}>
                        {item.label}
                    </Text>
                    <Text style={styles.content}>
                        R$ {item.value}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#64AA9E',
            paddingHorizontal: 40,
            paddingVertical: 12,
        },
        label:
        {
            backgroundColor: '#589589',
            color: '#FFF',
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 12,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            width: 130,
        },
        content:
        {
            paddingHorizontal: 16,
            paddingVertical: 12,
            fontSize: 24,
            fontWeight: 'bold',
            color: '#FFF',

        },
        item:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
            alignItems: 'center',

        }
    }

);

export default Results;