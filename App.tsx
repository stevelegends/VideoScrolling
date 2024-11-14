import './global.css';

import React from 'react';

// modules
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// components
import {Navigation} from './src';

//context
import {AuthProvider} from './src/context';
import {Lightbox} from './src/components/organisms';
import {Provider as LightBoxProvider} from './src/components/organisms/lightbox/useLightbox.tsx';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <LightBoxProvider>
          <AuthProvider>
            <Navigation />
            <Lightbox />
          </AuthProvider>
        </LightBoxProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
