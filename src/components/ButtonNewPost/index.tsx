import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';

interface ButtonNewPostProps {
    size: number;
    color?: string;
    focused: boolean;
}

export function ButtonNewPost(props: ButtonNewPostProps) {
  return (
    <View style={[styles.container, {backgroundColor: props.focused ? '#3c74ec': '#1655e0' }]}>
        <Entypo name='plus' color={props.focused ? '#FFF' : '#F9F9F9'} size={props.size} focused={props.focused} />
    </View>
  );
}