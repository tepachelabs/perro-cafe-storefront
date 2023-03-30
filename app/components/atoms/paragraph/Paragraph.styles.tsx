import styled, {css} from 'styled-components';

export interface ParagraphVariant {
  lineHeight: number | string;
  bold?: boolean;
  italic?: boolean;
}

const boldStyle = css`
  font-weight: 700;
`;
const italicStyle = css`
  font-style: italic;
`;

export const StyledParagraph = styled.p<ParagraphVariant>`
  font-size: 1em;
  font-weight: 400;
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.body};
  line-height: ${({lineHeight}) => lineHeight};
  ${({bold}) => bold && boldStyle};
  ${({italic}) => italic && italicStyle};

}`;
