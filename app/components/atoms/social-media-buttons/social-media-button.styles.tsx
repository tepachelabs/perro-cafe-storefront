import {ReactNode} from 'react';
import styled from 'styled-components';

export interface StyledButtonProps {
  isDarkBackground?: boolean;
  href?: string;
}

export const Icon = styled.img`
  width: 20px;
`;

export const Container = styled.div`
  width: 20px;
`;

export const StyledButton = styled.div<StyledButtonProps>`
  background-color: ${({isDarkBackground, theme}) =>
    isDarkBackground ? theme.colors.black : theme.colors.backgroundDarker};
  width: 20px;
  height: 20px;
  border-radius: 0.2em;
  padding: 0.5em 0.5em;
  position: block;
  display: flex;
  cursor: pointer;
`;
