import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

const HeadingCommonStyles = ({theme}: {theme: Theme}) => css`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.body};
  line-height: 1.6;
  margin: 1rem 0 0.5rem;
`;

export const Heading1 = styled.h1`
  ${HeadingCommonStyles};

  font-size: ${({theme}) => theme.sizes.heading1};
`;

export const Heading2 = styled.h2`
  ${HeadingCommonStyles};

  font-size: ${({theme}) => theme.sizes.heading2};
`;

export const Heading3 = styled.h3`
  ${HeadingCommonStyles};

  font-size: ${({theme}) => theme.sizes.heading3};
`;

export const Heading4 = styled.h4`
  ${HeadingCommonStyles};

  font-size: ${({theme}) => theme.sizes.heading4};
`;

export const Heading5 = styled.h5`
  ${HeadingCommonStyles};

  font-size: ${({theme}) => theme.sizes.heading5};
`;

export const Heading6 = styled.h6`
  ${HeadingCommonStyles};

  font-size: ${({theme}) => theme.sizes.heading6};
`;
