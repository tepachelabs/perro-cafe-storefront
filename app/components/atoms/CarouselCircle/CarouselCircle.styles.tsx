import styled, {css} from 'styled-components';

export interface CarouselCircleProps {
  active?: boolean;
}

const activeStyles = css`
  background-color: ${({theme}) => theme.colors.backgroundDarker};
  border-width: 3px;
  border-color: ${({theme}) => theme.colors.black};
  border-style: solid;
`;

export const Bullet = styled.span<CarouselCircleProps>`
  display: block;

  width: 10px;
  height: 10px;

  background-color: ${({theme}) => theme.colors.black};
  border-radius: 50%;

  ${({active}) => active && activeStyles};
`;
