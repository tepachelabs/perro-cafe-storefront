import styled from '@emotion/styled';

export const InfoSection = styled.section`
  max-width: ${({theme}) => theme.sizes.maxWidth};
  margin: 2rem auto 1.5rem;
  padding: 0 1rem;

  & > div > img {
    max-width: 100%;
  }
`;

export const SectionDividerContainer = styled.div`
  margin: 2rem 0;
`;

export const ProductsSection = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const CarouselContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
`;
