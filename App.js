import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreenPage from './apps/Screen/LoginScreenPage';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './apps/Navigation/TabNavigation';



export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
  });

  // Render loading state if fonts are not yet loaded
  if (!fontsLoaded) {
    return null; // You can render a loading indicator here if you prefer
  }

  // Fonts are loaded, render the app content
  return (
    <ClerkProvider publishableKey='pk_test_Y29udGVudC1nb3BoZXItMy5jbGVyay5hY2NvdW50cy5kZXYk'>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SignedIn>
       <NavigationContainer>
        <TabNavigation/>
       </NavigationContainer>
        </SignedIn>
      <SignedOut>
      <LoginScreenPage/>
        </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
