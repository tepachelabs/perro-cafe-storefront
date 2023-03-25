import styled from 'styled-components';

export const StyledParagraph = styled.p`
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.body};
  font-size: 1em;
  line-height : 2em;
  font-weight: 400;
`;
