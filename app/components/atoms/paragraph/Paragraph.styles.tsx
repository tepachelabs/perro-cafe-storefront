import styled, {css} from 'styled-components';

export interface ParagraphVariant {
  height: 'small' | 'large';
  weight: 'normal' | 'bold'
}

const heights = {
  small: css`
    line-height : 1em;
  `,
  large: css`
    line-height : 2em;
  `,
};

const weights = {
  normal: css`
    font-weight: 400;
  `,
  bold: css`
    font-weight: 700;
  `,
};

export const StyledParagraph = styled.p<ParagraphVariant>`
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.body};
  font-size: 1em;
  ${({height}) => heights[height|| 'small']}
  ${({weight}) => weights[weight|| 'normal']}
`;
