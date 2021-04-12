import React from 'react';
import { SearchBar, ListItem, Avatar } from 'react-native-elements';
import mainTheme from 'src/styles/mainTheme';

const SearchBarCustom = (props) => (
    <SearchBar
      containerStyle={{
        backgroundColor: mainTheme.primary,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
      }}
      inputContainerStyle={{ backgroundColor: "white" }}
      autoFocus
      round
      {...props} />
  );
export default SearchBarCustom;