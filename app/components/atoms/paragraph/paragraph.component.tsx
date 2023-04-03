import styled from 'styled-components';

interface Props {
  lineHeight?: number | string;
  bold?: boolean;
  italic?: boolean;
}

export const Paragraph = styled.p<Props>`
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.body};
  ${({bold}) => bold && 'font-weight: bold'};
  ${({italic}) => italic && 'font-style: italic'};
  ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`};
  margin-block-start: 0;
  margin-block-end: 0;
}`;
