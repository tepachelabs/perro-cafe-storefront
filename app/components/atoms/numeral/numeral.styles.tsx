import styled from '@emotion/styled';

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 60px;
`;

export const Img = styled.img`
  position: relative;
  width: 60px;
`;

export const Label = styled.span`
  position: absolute;

  color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.sizes.numeralSubheader};
`;
