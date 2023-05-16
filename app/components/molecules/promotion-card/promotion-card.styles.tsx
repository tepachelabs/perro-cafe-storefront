import styled from '@emotion/styled';

import {Paragraph} from '../../atoms/paragraph';

export interface CardProps {
  fullWidth?: boolean;
  borderless?: boolean;
}

export const Card = styled.div<CardProps>`
  border: 3px solid ${(props) => props.theme.colors.black};
  display: inline-block;
  position: relative;

  ${({fullWidth}) => fullWidth && 'width: 100%'};
  ${({borderless}) => borderless && 'border: none'};

  & > p {
    background-color: ${(props) => props.theme.colors.primary};
    border-top: 3px solid ${(props) => props.theme.colors.black};
    font-weight: bold;
    line-height: 2em;
    margin: 0;
    text-align: center;
  }
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

export const Title = styled(Paragraph)``;

Title.defaultProps = {
  bold: true,
};
