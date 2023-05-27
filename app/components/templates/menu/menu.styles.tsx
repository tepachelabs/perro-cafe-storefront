import styled from '@emotion/styled';

import {Paragraph} from '../../atoms/paragraph';

export const PrimaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > hr {
    margin: 1rem 0;
  }

  ${({theme}) => theme.mediaQueries.desktop} {
    width: 50%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const CarouselContainer = styled.div`
  margin: 0 auto;
`;

export const MenuDescription = styled(Paragraph)``;

MenuDescription.defaultProps = {
  lineHeight: '30px',
};
