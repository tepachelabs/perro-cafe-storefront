import {ReactNode} from 'react';
import styled from 'styled-components';

export interface Props {
  dark: boolean;
}

export const Icon = styled.img`
  width: 2.25em;
`;

export const Container = styled.div`
  width: 2.25em;
`;

export const StyledButton = styled.div<Props>`
  background-color: ${({dark, theme}) =>
    dark ? theme.colors.backgroundDarker : theme.colors.black};
  width: 2.25em;
  height: 2.25em;
  border-radius: 0.4em;
  padding: 1em 1em;
  position: relative;
  display: flex;
  cursor: pointer;
`;
