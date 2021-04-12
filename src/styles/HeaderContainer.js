import styled from 'styled-components/native';
import { View } from 'react-native';
import mainTheme from './mainTheme';

const HeaderContainer = styled(View)`
  background-color: ${mainTheme.primary}; 
  flex: 1;
  align-items: center; 
  flex-direction: row;
`;

export default HeaderContainer;