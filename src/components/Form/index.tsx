import React , {useState} from 'react';
import * as AuthSession from 'expo-auth-session';
import { User, UserProps } from '../User';
import { Button } from '../Button';

import { Container } from './styles';

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
}

export function Form() {
  const [userData, setUserData] = useState<UserProps>({} as UserProps);

  async function handleGoogleSigin(){

    try {
      const CLIENT_ID = "617276213096-dh1bjtsfncrr4lb0h3a88sda979d6rlp.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@gustamds7/dogpic";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      //https://accounts.google.com/o/oauth2/v2/auth
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const {type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;
      //console.log(type, params);

      if (type === 'success') {
        try {

          const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
          const user = await response.json();
          //console.log(user);
          setUserData(user);

        } catch (error) {
          console.log(error)
        }
      }
      
    } catch (error) {
      console.log(error);  
    }

  }

  return (
    <Container>
      <Button
        icon="google"
        title="Entrar com Google"
        onPress={handleGoogleSigin}
      />

      <User user={userData} /> 
    </Container>
  )
}