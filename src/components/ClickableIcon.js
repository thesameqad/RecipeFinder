import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import mainTheme from 'src/styles/mainTheme';

const ClickableIcon = (props) => (
    <TouchableOpacity onPress={props.onPress}>
      <Icon name={props.name} color={mainTheme.headerTextColor} size={mainTheme.iconSize} />
    </TouchableOpacity>
  );
export default ClickableIcon;