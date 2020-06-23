import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { FONT_MEDIUM } from '../../helpers/fonts';

export const Container = styled(RectButton)`
  align-items: center;
  background: #ff9000;
  border-radius: 10px;
  height: 60px;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-family: ${FONT_MEDIUM};
  color: #312e38;
  font-size: 16px;
`;
