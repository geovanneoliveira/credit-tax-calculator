import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function NavbarPages({back}) {

    return (
        <View style={styles.nav}>
            <TouchableWithoutFeedback onPress={back}>
                <Icon style={styles.icon} name='chevron-left' />
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    nav:
    {
        flexDirection: 'row',
        justifyContent: "flex-start",
        padding: 36
    },
    icon:
    {
        fontSize: 32,
        color: '#3A3A3A'
    }

});


export default NavbarPages;