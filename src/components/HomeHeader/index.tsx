import { Power } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import theme from '../../theme';
import { Container, Greeting, Message, Name, Picture } from './styles';


export function HomeHeader() {
  return (
    <Container>
       <Picture 
        source={{ uri: 'https://github.com/Ca-byte.png' }}
        placeholder='L184i9offQof00ayfQay~qj[fQj['
      />
      <Greeting>
        <Message>
          Hi
        </Message>
        <Name>
          Caroline
        </Name>
      </Greeting>

      <TouchableOpacity>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  );
}