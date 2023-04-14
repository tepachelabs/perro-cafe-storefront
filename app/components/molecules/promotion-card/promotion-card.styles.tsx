import styled from 'styled-components';

import {Paragraph} from '../../atoms/paragraph';

export interface CardProps {
  fullWidth?: boolean;
  borderless?: boolean;
}

export const Card = styled.div<CardProps>`
  border: 3px solid ${({theme}) => theme.colors.black};
  display: inline-block;
  position: relative;

  ${({fullWidth}) => fullWidth && 'width: 100%'};
  ${({borderless}) => borderless && 'border: none'};
`;

export const Img = styled.img`
  aspect-ratio: 1;
  display: block;
  height: 220px;
  width: 100%;
  object-fit: cover;
`;

export const BadgeContainer = styled.div`
  height: 80px;
  position: absolute;
  right: 14px;
  top: 16px;
  width: 80px;
`;

export const Title = styled(Paragraph).attrs({
  bold: true,
})`
  background-color: ${({theme}) => theme.colors.primary};
  border-top: 3px solid ${({theme}) => theme.colors.black};
  font-weight: bold;
  line-height: 2em;
  margin: 0;
  text-align: center;
`;
