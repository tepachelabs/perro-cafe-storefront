import styled, {css} from 'styled-components';

export interface Props {
  active?: boolean;
}

const activeStyles = css`
  background-color: ${({theme}) => theme.colors.backgroundDarker};
  border: 3px solid ${({theme}) => theme.colors.black};
`;

export const CarouselCircle = styled.span<Props>`
  display: block;

  width: 10px;
  height: 10px;

  background-color: ${({theme}) => theme.colors.black};
  border-radius: 50%;

  ${({active}) => active && activeStyles};
`;
