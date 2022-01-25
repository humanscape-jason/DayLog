import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import LogContext, {LogContextProvider} from './src/contexts/LogContext';

const App = () => (
  <NavigationContainer>
    <LogContextProvider>
      <RootStack />
    </LogContextProvider>
  </NavigationContainer>
);

export default App;
