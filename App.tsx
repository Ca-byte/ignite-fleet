import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { SignIn } from './src/screens/SignIn';
import theme from './src/theme';

export default function App() {
  const realmAppId: string | undefined = process.env.EXPO_PUBLIC_REALM_APP_ID;


  if (!realmAppId) {
    throw new Error("Missing EXPO_PUBLIC_REALM_APP_ID environment variable.");
  }
  
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  if(!fontsLoaded) {
    return (
      <Loading />
    )
  }
  return (
    <AppProvider id={realmAppId}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar 
            barStyle="light-content" 
            backgroundColor="transparent" 
            translucent 
          />
          <UserProvider fallback={SignIn}>
          <Routes />
          <RealmProvider>
              <Routes />
            </RealmProvider>
          </UserProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  );
}
