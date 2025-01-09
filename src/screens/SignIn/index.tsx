import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useApp } from '@realm/react';
import { useState } from 'react';
import { Alert } from 'react-native';
import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';
import { Container, Slogan, Title } from './styles';

GoogleSignin.configure({
  scopes: ["email", "profile", "openid"],
  // @ts-ignore
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
   // @ts-ignore
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
});


export function SignIn() {
  const [isAutenticating, setIsAuthenticanting] = useState(false)
  const app = useApp()

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticanting(true)

      const response = await GoogleSignin.signIn();
      const idToken = response.data?.idToken;  
      console.log(idToken)
     
      if(idToken) {
        const credentials = Realm.Credentials.jwt(idToken)
        await app.logIn(credentials)

      } else {

        Alert.alert('Sign in', "Unable to connect to your google account.")
        setIsAuthenticanting(false)  
      }
    } catch (error) {
      
      console.log(error)
      Alert.alert('Sign in', "Unable to connect to your google account.")
      setIsAuthenticanting(false)
    }
  }

  return (
    <Container source={backgroundImg}>
    <Title>Ignite Fleet</Title>
    <Slogan>
      Vehicle usage management
    </Slogan>
    <Button title='Sign in with Google' onPress={handleGoogleSignIn} />
  </Container>
  );
}