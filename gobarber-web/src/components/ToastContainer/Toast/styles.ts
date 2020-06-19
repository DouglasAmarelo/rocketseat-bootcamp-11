import styled, { css } from 'styled-components';

type ToastProps = {
  type?: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
};

const toastTypes = {
  INFO: css`
    background-color: #fff;
    color: #3172b7;
  `,
  SUCCESS: css`
    background-color: #64f597;
    color: #1b1b1b;
  `,
  WARNING: css`
    background-color: #fff368;
    color: #1b1b1b;
  `,
  ERROR: css`
    background-color: #f56464;
    color: #fff;
  `,
};

export const Toast = styled.div<ToastProps>`
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 320px;
  padding: 15px 30px;
  position: relative;
  width: 100%;

  ${({ type }) => (type && toastTypes[type]) || toastTypes.INFO}

  & + div {
    margin-top: 10px;
  }

  & > svg {
    display: block;
    margin: 0 10px 0 -15px;
  }

  div {
    flex: 1;
  }
`;

export const ToastTitle = styled.strong`
  display: block;
  font-size: 15px;
  line-height: 120%;
  margin-right: 15px;
`;

export const ToastContent = styled.p`
  font-size: 12px;
  line-height: 20px;
  margin-top: 5px;
`;

export const CloseToast = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  position: absolute;
  right: 15px;
  top: 15px;
`;
