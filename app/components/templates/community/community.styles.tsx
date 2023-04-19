import styled from 'styled-components';

const desktopMediaQuery = '@media (min-width: 768px)';

export const CommunitySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem 1.25rem;
  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  ${desktopMediaQuery} {
    flex-direction: row;
    align-items: stretch;
    gap: 0.5rem;
  }
`;
