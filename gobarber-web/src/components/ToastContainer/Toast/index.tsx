import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiAlertTriangle,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/ToastContext';

import * as S from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const toastIcons = {
  INFO: <FiInfo size={20} />,
  SUCCESS: <FiCheckCircle size={20} />,
  WARNING: <FiAlertTriangle size={20} />,
  ERROR: <FiAlertCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({
  message: { id, title, description, type },
  style,
}) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const toastTime = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(toastTime);
    };
  }, [removeToast, id]);

  return (
    <S.Toast key={id} style={style} {...(type && { type })}>
      {toastIcons[type || 'INFO']}

      <div>
        <S.ToastTitle>{title}</S.ToastTitle>{' '}
        {description && <S.ToastContent>{description}</S.ToastContent>}
      </div>

      <S.CloseToast onClick={() => removeToast(id)}>
        <FiXCircle size={18} />
      </S.CloseToast>
    </S.Toast>
  );
};

export default Toast;
