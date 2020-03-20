import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TaxInput from '../components/TaxInput';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';
import { useSelector, useDispatch } from 'react-redux'

function Setting() {

    const dispatch = useDispatch();
    const taxes = useSelector(state => state.taxes);
    const [taxCredit, setTaxCredit] = React.useState(taxes.taxCredit * 100);
    const [taxDebit, setTaxDebit] = React.useState(taxes.taxDebit * 100);

    function handleSave() {
        const payload = { taxCredit: parseFloat(taxCredit, 10) / 100, taxDebit: parseFloat(taxDebit, 10) / 100 }

        dispatch({ type: 'EDIT_TAXES', payload })
    }

    function handleCancel() {
        setTaxCredit(String(taxes.taxCredit * 100));
        setTaxDebit(String(taxes.taxDebit * 100));
    }


    return (
        <View style={styles.container}>
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
        paddingVertical: 120
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