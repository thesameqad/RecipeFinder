import styled from 'styled-components/native';
import { View } from 'react-native';
import mainTheme from './mainTheme';

const TitleContainer = styled(View)`
  flex: 10; 
  margin-left: ${mainTheme.marginLeft};
`;

export default TitleContainer;