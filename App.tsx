import './global.css';

import React from 'react';

// modules
import {SafeAreaProvider} from 'react-native-safe-area-context';

// components
import {Navigation} from './src';

//context
import {AuthProvider} from './src/context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;
