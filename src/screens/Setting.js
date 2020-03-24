import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TaxInput from '../components/TaxInput';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';
import { useSelector, useDispatch } from 'react-redux'
import NavbarPages from '../components/NavbarPages';

function Setting({ navigation }) {

    const dispatch = useDispatch();
    const taxes = useSelector(state => state.taxes);
    const [taxCredit, setTaxCredit] = React.useState(String(taxes.credit * 10000));
    const [taxDebit, setTaxDebit] = React.useState(String(taxes.debit * 10000));

    function handleSave() {
        const payload = { credit: parseFloat(taxCredit, 10) / 10000, debit: parseFloat(taxDebit, 10) / 10000 }

        dispatch({ type: 'EDIT_TAXES', payload });
        navBack();
    }

    function handleCancel() {
        navBack();
    }

    function navBack() { navigation.goBack(); }

    return (
        <View style={styles.container}>
            <NavbarPages back={navBack} />
            <TaxInput title='Tarifa de Crédito' value={taxCredit} onChange={setTaxCredit} />
            <TaxInput title='Tarifa de Debito' value={taxDebit} onChange={setTaxDebit} />
            <View style={styles.item}>
                <CancelButton onPress={handleCancel} />
                <SaveButton onPress={handleSave} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        paddingVertical: 12
    },
    item:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: 'center',
    }
});

export default Setting;