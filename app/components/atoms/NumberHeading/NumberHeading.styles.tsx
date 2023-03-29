import styled from 'styled-components';

import polygon from './img/Polygon.svg';

export interface NumberHeadingProps {
  children?: string;
}

export const Number = styled.h3`
  position: absolute;

  top: 8px;
  left: 28px;

  line-height: 18px;
  letter-spacing: -2px;

  font-size: 44px;
  font-family: ${({theme}) => theme.fonts.title};
  font-weight: normal;
  color: ${({theme}) => theme.colors.background};
`;

export const StyledNumberHeading = styled.div`
  width: 60px;
  height: 78px;

  background-image: url(${polygon});
`;
