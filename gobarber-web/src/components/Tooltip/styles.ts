import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;

  span {
    background: #ff9000;
    border-radius: 4px;
    bottom: calc(100% + 12px);
    color: #312e38;
    font-size: 13px;
    font-weight: 400;
    left: 50%;
    opacity: 0;
    padding: 8px;
    position: absolute;
    transform: translateX(-50%);
    transition: opacity 0.2s, visibility 0.2s;
    visibility: hidden;
    width: 160px;

    &:before {
      border: solid transparent;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      content: '';
      left: 50%;
      position: absolute;
      top: 100%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }
`;
