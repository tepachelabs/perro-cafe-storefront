import styled, {css} from 'styled-components';

export interface CarouselCircleProps {
  variant?: 'normal' | 'selected';
}

const variants = {
  normal: css`
    background-color: ${({theme}) => theme.colors.black};
  `,
  selected: css`
    background-color: ${({theme}) => theme.colors.backgroundDarker};
    border-width: 3px;
    border-color: ${({theme}) => theme.colors.black};
    border-style: solid;
  `,
};

export const Bullet = styled.span<CarouselCircleProps>`
  ${({variant}) => variants[variant || 'normal']}
  display: block;

  width: 10px;
  height: 10px;

  border-radius: 50%;
`;
