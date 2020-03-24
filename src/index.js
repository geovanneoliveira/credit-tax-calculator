import React from 'react';
import { SafeAreaView } from 'react-native';
import store from './store'
import { Provider as ReduxProvider } from 'react-redux'
import Routes from './Routes';

function Index() {

    return (
        <ReduxProvider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <Routes />
            </SafeAreaView>
        </ReduxProvider>
    );
}

export default Index;