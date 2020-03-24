import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function NavbarHome({ goto }) {

    return (
        <View style={styles.nav}>
            <TouchableWithoutFeedback onPress={goto}>
                <Icon style={styles.icon} name="cog" />
            </TouchableWithoutFeedback>
        </View>
    );

}

const styles = StyleSheet.create({
    nav:
    {
        flexDirection: 'row',
        justifyContent: "flex-end",
        padding: 36
    },
    icon:
    {
        fontSize: 32,
        color: '#3A3A3A'
    }

});


export default NavbarHome;