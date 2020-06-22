import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <S.Container>
      <S.InputIcon name={icon} size={20} color="#676360" />
      <S.TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#676360"
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
