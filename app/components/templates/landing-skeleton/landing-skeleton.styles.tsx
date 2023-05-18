import styled from '@emotion/styled';

export const Title = styled.h2`
  display: inline-block;
`;

const Skeleton = styled.div<{
  grid?: boolean;
  gridTemplateColumns?: string[];
  gridGap?: string[];
  gridColumn?: string[];
  h?: string;
  mh?: string;
}>`
  ${({grid}) => grid && `display: grid;`}

  ${({gridTemplateColumns}) =>
    gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns[0]};`}
  ${({gridGap}) => gridGap && `grid-gap: ${gridGap[0]};`}
  ${({gridColumn}) => gridColumn && `grid-column: ${gridColumn[0]};`}

  ${({h}) => h && `height: ${h};`}
  ${({mh}) => mh && `min-height: ${mh};`}

  ${({theme}) => theme.mediaQueries.desktop} {
    grid-template-columns: repeat(2, 1fr);

    ${({gridTemplateColumns}) =>
      gridTemplateColumns &&
      `grid-template-columns: ${gridTemplateColumns[1]};`}

    ${({gridGap}) => gridGap && `grid-gap: ${gridGap[1]};`}
    ${({gridColumn}) => gridColumn && `grid-column: ${gridColumn[1]};`}
  }
`;

export const Container = styled(Skeleton)`
  display: grid;
  position: relative;
`;

export const Block = styled(Skeleton)`
  align-items: center;
  border: 2px solid #333;
  border-collapse: collapse;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Main = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};
  width: 100%;
`;

export const Img = styled.img``;
