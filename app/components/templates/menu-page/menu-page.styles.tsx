import styled from '@emotion/styled';

export const MenuPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem 1rem 2rem;
  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};
`;

export const CollectionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${({theme}) => theme.mediaQueries.desktop} {
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-end;
  }
`;

export const Product = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Img = styled.img`
  width: 100%;
`;
