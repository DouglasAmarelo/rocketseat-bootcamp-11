import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import { FONT_REGULAR } from '../../helpers/fonts';

interface ContainerProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  flex-direction: row;
  height: 60px;
  margin-bottom: 10px;
  padding: 0 16px;
  width: 100%;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const InputIcon = styled(Icon)`
  margin-right: 15px;
`;

export const TextInput = styled.TextInput`
  color: #fff;
  flex: 1;
  font-family: ${FONT_REGULAR};
  font-size: 16px;
`;
