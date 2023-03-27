import styled from 'styled-components';

export interface BadgeProps {
  variant?: 'seasonal' | 'recommendation';
}

export const Highlight = styled.span`
  animation-name: highlight;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;

  display: block;
  position: absolute;
  top: -46px;
  left: -12px;

  width: 16px;
  height: 90px;

  background: rgba(255, 255, 255, 0.5);

  will-change: transform;
  transform: rotate(45deg);

  @keyframes highlight {
    0% {
      transform: rotate(45deg);
    }
    10% {
      transform: rotate(45deg) translate(120px);
    }
    100% {
      transform: rotate(45deg) translate(120px);
    }
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
`;

export const StyledBadge = styled.div`
  width: 80px;
  height: 80px;
  position: relative;

  border-radius: 50%;
  overflow: hidden;
`;
