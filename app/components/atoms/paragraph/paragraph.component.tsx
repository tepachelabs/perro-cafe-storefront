import styled from '@emotion/styled';

interface Props {
  lineHeight?: number | string;
  bold?: boolean;
  italic?: boolean;
}

export const Paragraph = styled.p<Props>`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.body};

  ${({bold}) => bold && 'font-weight: bold'};
  ${({italic}) => italic && 'font-style: italic'};
  ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`};
}`;
