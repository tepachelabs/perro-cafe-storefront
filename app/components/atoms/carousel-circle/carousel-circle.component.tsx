import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

export interface Props {
  active?: boolean;
}

const activeStyles = ({theme}: {theme: Theme}) => css`
  width: 13px;
  height: 13px;

  background-color: ${theme.colors.backgroundDarker};
  border: 3px solid ${theme.colors.black};
`;

export const CarouselCircle = styled.span<Props>`
  display: block;

  width: 10px;
  height: 10px;

  background-color: ${(props) => props.theme.colors.black};
  border-radius: 50%;

  ${({active}) => active && activeStyles};
`;
