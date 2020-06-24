import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

import { FONT_MEDIUM, FONT_REGULAR } from '../../helpers/fonts';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: ${FONT_MEDIUM};
  margin: 65px 0 25px 0;
`;

export const ForgotPassord = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPassordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: ${FONT_REGULAR};
`;

export const CreateAccountButton = styled.TouchableOpacity`
  align-items: center;
  background: #312e38;
  border-top-width: 1px;
  border-top-color: #232129;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  left: 0;
  padding: 16px 0 ${10 + getBottomSpace()}px 0;
  position: absolute;
  right: 0;
  width: 100%;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-family: ${FONT_REGULAR};
  font-size: 16px;
  margin-left: 16px;
`;
