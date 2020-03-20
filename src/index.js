import React from 'react';
import Home from './screens/Home';
import { SafeAreaView } from 'react-native';
import Setting from './screens/Setting';
import store from './store'
import { Provider as ReduxProvider } from 'react-redux'

function Index() {

    return (
        <ReduxProvider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <Setting />
            </SafeAreaView>
        </ReduxProvider>
    );
}

export default Index;