import styled from '@emotion/styled';

export const Section = styled.section<{
  flexDirection?: 'row' | 'column';
}>`
  display: flex;
  flex-direction: column;
  gap: 4em;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};
  padding: 2.75em 1.25em;

  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection};`};

  ${({theme}) => theme.mediaQueries.desktop} {
    flex-direction: row;
  }
`;
