import { useApp, useUser } from '@realm/react';
import { Power } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import theme from '../../theme';
import { Container, Greeting, Message, Name, Picture } from './styles';


export function HomeHeader() {
  const user = useUser();
  const app = useApp();

  function handleLogOut() {
    app.currentUser?.logOut();
  }

  return (
    <Container>
       <Picture 
        source={{ uri: user?.profile.pictureUrl }}
        placeholder='L184i9offQof00ayfQay~qj[fQj['
      />
      <Greeting>
        <Message>
          Hi
        </Message>
        <Name>
          {user?.profile.name}
        </Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogOut}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  );
}