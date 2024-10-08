import React from 'react';

// modules
import {SafeAreaProvider} from 'react-native-safe-area-context';

// components
import {Navigation} from './src';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
