import styled from 'styled-components/native';
import { Text } from 'react-native';
import mainTheme from './mainTheme';

const Title = styled(Text)`
  font-size: ${mainTheme.headerFontSize};
  color: ${mainTheme.headerTextColor};
`;

export default Title;