import styled from '@emotion/styled';

import {select} from '../../../utils';
import {Paragraph} from '../../atoms/paragraph';

export interface CardProps {
  fullWidth?: boolean;
  borderless?: boolean;
}

export const Card = styled.div<CardProps>`
  border: ${select((theme) => theme.sizes.borderWidth)} solid
    ${select((theme) => theme.colors.black)};
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  position: relative;
  overflow: hidden;

  ${({fullWidth}) => fullWidth && 'width: 100%'};
  ${({borderless}) => borderless && 'border: none'};

  & > a {
    display: inline-block;
    padding: 0;
    margin: 0;
    font-size: unset;
    line-height: unset;
    height: unset;
    border-bottom: none;
    overflow: hidden;
  }

  & p {
    background-color: ${(props) => props.theme.colors.primary};
    border-top: 3px solid ${(props) => props.theme.colors.black};
    font-weight: bold;
    line-height: 2em;
    margin: 0;
    padding: 0 0.5em;
    text-align: center;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Img = styled.img`
  aspect-ratio: 3/2;
  display: block;
  height: 280px;
  object-fit: cover;
  width: 100%;

  ${({theme}) => theme.mediaQueries.desktop} {
    height: 220px;
  }
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
