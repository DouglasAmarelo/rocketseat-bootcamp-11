import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import * as S from './styles';

const ToastContainer: React.FC = () => {
  return (
    <S.Container>
      <S.Toast>
        <FiAlertCircle size={20} />
        <div>
          <S.ToastTitle>Um erro aconteceu</S.ToastTitle>
        </div>

        <S.CloseToast>
          <FiXCircle size={18} />
        </S.CloseToast>
      </S.Toast>

      <S.Toast type="WARNING">
        <FiAlertCircle size={20} />
        <div>
          <S.ToastTitle>Um erro aconteceu</S.ToastTitle>{' '}
          <S.ToastContent>
            Não foi possível fazer login na aplicação.
          </S.ToastContent>
        </div>

        <S.CloseToast>
          <FiXCircle size={18} />
        </S.CloseToast>
      </S.Toast>

      <S.Toast type="SUCCESS">
        <FiAlertCircle size={20} />
        <div>
          <S.ToastTitle>Um erro aconteceu</S.ToastTitle>
          <S.ToastContent>
            Não foi possível fazer login na aplicação.
          </S.ToastContent>
        </div>

        <S.CloseToast>
          <FiXCircle size={18} />
        </S.CloseToast>
      </S.Toast>

      <S.Toast type="ERROR">
        <FiAlertCircle size={20} />
        <div>
          <S.ToastTitle>Um erro aconteceu</S.ToastTitle>
          <S.ToastContent>
            Não foi possível fazer login na aplicação.
          </S.ToastContent>
        </div>

        <S.CloseToast>
          <FiXCircle size={18} />
        </S.CloseToast>
      </S.Toast>

      <S.Toast type="INFO">
        <FiAlertCircle size={20} />
        <div>
          <S.ToastTitle>Um erro aconteceu</S.ToastTitle>
          <S.ToastContent>
            Não foi possível fazer login na aplicação.
          </S.ToastContent>
        </div>

        <S.CloseToast>
          <FiXCircle size={18} />
        </S.CloseToast>
      </S.Toast>
    </S.Container>
  );
};

export default ToastContainer;
