import styled from '@emotion/styled';

export const CommunitySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3em;

  padding: 2.25em 1.25em;
  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding-bottom: 2em;

  ${({theme}) => theme.mediaQueries.desktop} {
    flex-direction: row;
    align-items: stretch;
    gap: 1em;
  }
`;
