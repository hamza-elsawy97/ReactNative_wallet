// import { Stack } from "expo-router";
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import SafeScreen from '@/components/SafeScreen.jsx';

export default function RootLayout() {
  return ( 
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
      <Slot />
      {/* <Stack screenOptions={{ headerShown: false}} /> */}
      </SafeScreen>
    </ClerkProvider>
  );
}



function RootLayoutNav() {
  return (
    <ClerkProvider>
      <Slot />
    </ClerkProvider>
  )
}