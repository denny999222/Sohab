// SETUP //
import React, {useEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
// REDUX
import {Provider} from 'react-redux';

// UI //
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  Portal as PaperPortal,
} from 'react-native-paper';

// STACKS //
import AppStack from '@stacks/AppStack';

const App = () => {
  return (
    <PaperProvider>
      <PaperPortal>
        <SafeAreaProvider>
          <StatusBar backgroundColor={'yellow'} barStyle="light-content" />
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperPortal>
    </PaperProvider>
  );
};

export default App;
