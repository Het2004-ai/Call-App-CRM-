import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ContactProvider } from './src/context/ContactContext';
import { CallLogProvider } from './src/context/CallLogContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ContactProvider>
          <CallLogProvider>
            <StatusBar style="light" />
            <AppNavigator />
          </CallLogProvider>
        </ContactProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}