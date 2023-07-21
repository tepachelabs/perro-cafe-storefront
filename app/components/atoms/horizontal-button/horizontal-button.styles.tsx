import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

import {Paragraph} from '../paragraph';

const borderStyle = ({theme}: {theme: Theme}) => css`
  ${theme.sizes.borderWidth} solid ${theme.colors.black}
`;

export const ButtonFace = styled.span`
  display: block;
  width: 220px;
  height: 46px;
  background-color: ${(props) => props.theme.colors.background};
  border: ${borderStyle};
  border-radius: 23px;
  transform: translateY(calc(${(props) => props.theme.sizes.borderWidth} * -4));
  transition: all 200ms ease;

  position: relative;
  left: -${(props) => props.theme.sizes.borderWidth};

  & > p {
    text-transform: uppercase;

    position: absolute;
    top: 9px;
    left: 20px;
  }
`;

export const StyledHorizontalButton = styled.span`
  display: block;
  width: 220px;
  height: 46px;
  background-color: ${(props) => props.theme.colors.backgroundDarker};
  border: ${borderStyle};
  border-radius: 16px 16px 23px 23px;
  cursor: pointer;
  transition: all 200ms ease;
  transform: translateY(calc(${(props) => props.theme.sizes.borderWidth} * 4));
  outline-offset: 4px;
  padding: 0;

  &:hover {
    filter: brightness(1.05);
  }

  &:hover span {
    transform: translateY(
      calc(${(props) => props.theme.sizes.borderWidth} * -4.25)
    );
  }

  &:active {
    filter: brightness(0.95);
  }

  &:active span {
    transform: translateY(
      calc(${(props) => props.theme.sizes.borderWidth} * -2.5)
    );
  }
`;

export const Label = styled(Paragraph)``;

Label.defaultProps = {
  bold: true,
};

export const Img = styled.img`
  position: absolute;
  top: 6px;
  right: 12px;
  height: 23px;
  width: 14px;
`;

export const LinkWrapper = styled.div`
  & > a {
    line-height: unset;
  }
`;
