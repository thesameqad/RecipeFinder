import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import mainTheme from 'src/styles/mainTheme';

const AnimatedFragement = styled(Animatable.View)`
  flex: 1;
  align-items: center; 
  flex-direction: row;
  margin-left: ${mainTheme.marginLeft};
`;

export default AnimatedFragement;