import styled, {css} from 'styled-components';

export interface LineVariant {
  size?: 'small' | 'medium' | 'max';
  color?: 'dark' | 'light';
}

const sizes = {
  small: css`
    width: 5.3125em;
  `,
  medium: css`
    width: 8.75em;
  `,
  max: css`
    width: 100%;
  `,
};

const colors = {
  dark: css`
    background: ${({theme}) => theme.colors.black};
  `,
  light: css`
    background: ${({theme}) => theme.colors.backgroundDarker};
  `,
};

export const LineDiv = styled.div<LineVariant>`
  ${({size}) => sizes[size || 'medium']}
  ${({color}) => colors[color || 'dark']}
  display: flex;
  height: 5px;
`;
