import React from 'react';
import { View, StyleSheet } from 'react-native';
import Results from '../components/Results';
import MoneyInput from '../components/MoneyInput';
import { useSelector } from 'react-redux'
import NavbarHome from '../components/NavbarHome';

function Home({ navigation }) {
    const taxes = useSelector(state => state.taxes);
    const [results, setResults] = React.useState([{ 'id': 'credit', 'label': 'Crédito', 'value': 0 }, { 'id': 'debit', 'label': 'Debito', 'value': 0 }]);
    const [value, setValue] = React.useState(0);

    function calculate(value) {
        setValue(value);
        setResults(
            results.map(result => {
                const tax = taxes[result.id]
                const newValue = ((parseInt(value, 10) / (1 - tax)) / 100);
                return { ...result, value: newValue.toFixed(2) }
            })
        );
    }

    function navGoto() { navigation.navigate('Settings') }

    function cleanData() { calculate(0); }

    React.useEffect(() => navigation.addListener('focus', cleanData));

    return (
        <View style={styles.container}>
            <NavbarHome goto={navGoto} />
            <MoneyInput value={value} onChange={calculate} autoFocus/>
            <Results data={results} />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            paddingVertical: 12
        }
    }
)

export default Home;