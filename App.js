// SETUP //
import React, {useEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
// REDUX
import {Provider} from 'react-redux';
import store from '@reducers';

// UI //
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  Portal as PaperPortal,
} from 'react-native-paper';
import FlashMessage from 'react-native-flash-message';

// STACKS //
import AppStack from '@stacks/AppStack';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <PaperPortal>
          <SafeAreaProvider>
            <StatusBar backgroundColor={'yellow'} barStyle="light-content" />
            <NavigationContainer>
              <AppStack />
              <FlashMessage position="top" />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperPortal>
      </PaperProvider>
    </Provider>
  );
};

export default App;
