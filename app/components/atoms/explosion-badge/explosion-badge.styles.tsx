import styled from 'styled-components';

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
  z-index: -1;
`;

export const Label = styled.span`
  color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.fonts.title};
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
`;
