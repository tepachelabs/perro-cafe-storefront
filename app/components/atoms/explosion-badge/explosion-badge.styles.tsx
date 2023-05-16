import styled from '@emotion/styled';

export const Frame = styled.div`
  align-items: center;
  display: flex;
  height: 68px;
  justify-content: center;
  width: 94px;
`;

export const Img = styled.img`
  height: 68px;
  position: absolute;
  width: 94px;
`;

export const Label = styled.span`
  position: relative;
  color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
`;
