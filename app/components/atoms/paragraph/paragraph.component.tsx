import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  lineHeight?: number | string;
  bold?: boolean;
  italic?: boolean;
  noMargin?: boolean;
}

export const ParagraphStyle = ({theme}: {theme: Theme}) => css`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.body};
  margin-bottom: 1.25rem;
`;

export const Paragraph = styled.p<Props>`
  ${ParagraphStyle};

  ${({bold}) => bold && 'font-weight: bold'};
  ${({italic}) => italic && 'font-style: italic'};
  ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`};
  ${({noMargin}) => noMargin && `margin: 0`};
}`;
