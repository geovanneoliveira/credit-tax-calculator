import React from 'react';
import Home from './screens/Home';
import { SafeAreaView } from 'react-native';

function Index() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Home />
        </SafeAreaView>
    );
}

export default Index;