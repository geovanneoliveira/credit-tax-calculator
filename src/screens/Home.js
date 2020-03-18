import React from 'react';
import { View, StyleSheet } from 'react-native';
import Results from '../components/Results';
import MoneyInput from '../components/MoneyInput';

function Home() {

    const [results, setResults] = React.useState([{ 'id': 'debit', 'label': 'Debito', 'tax': 0.0239, 'value': 0 }, { 'id': 'credit', 'label': 'Crédito', 'tax': 0.05, 'value': 0 }]);
    const [value, setValue] = React.useState(0);

    function calculate(value) {
        setValue(value);

        setResults(
            results.map(result => {
                return { ...result, value: ((parseFloat(value, 10) / (1 - result.tax)) / 100).toFixed(2) }
            })
        );
    }

    return (
        <View style={styles.container}>
            <MoneyInput value={value} onChange={calculate} />
            <Results data={results} />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            paddingVertical: 120
        }
    }
)

export default Home;