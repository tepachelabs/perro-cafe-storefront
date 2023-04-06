import {ReactNode} from 'react';
import styled from 'styled-components';

export interface StyledButtonProps {
  isDarkBackground?: boolean;
}

export const Icon = styled.img`
  width: 2.25em;
`;

export const Container = styled.div`
  width: 2.25em;
`;

export const StyledButton = styled.div<StyledButtonProps>`
  background-color: ${({isDarkBackground, theme}) =>
    isDarkBackground ? theme.colors.black : theme.colors.backgroundDarker};
  width: 2.25em;
  height: 2.25em;
  border-radius: 0.4em;
  padding: 1em 1em;
  position: relative; //
  display: flex;
  cursor: pointer;
`;
