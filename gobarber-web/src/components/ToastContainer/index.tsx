import React from 'react';
import { useTransition, config } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/ToastContext';

import * as S from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { transform: 'translateX(120%)' },
      enter: { transform: 'translateX(0)' },
      leave: { transform: 'translateX(120%)' },
      config: config.stiff,
    }
  );
  return (
    <S.Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
