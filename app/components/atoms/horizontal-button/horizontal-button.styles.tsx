import styled from '@emotion/styled';

import {Paragraph} from '../paragraph';

export const ButtonFace = styled.span`
  display: block;
  width: 220px;
  height: 46px;
  background-color: #f8eee0;
  border: 3px solid #222222;
  border-radius: 23px;
  transform: translateY(-16px);
  transition: all 200ms ease;

  position: relative;
  left: -3px;

  &:hover {
    transform: translateY(-17px);
  }
`;

export const StyledHorizontalButton = styled.a`
  display: block;
  width: 220px;
  height: 46px;
  background-color: #f2dab2;
  border: 3px solid #222222;
  border-radius: 16px 16px 23px 23px;
  color: #222222;
  cursor: pointer;
  transition: all 200ms ease;
  transform: translateY(16px);
  outline-offset: 4px;
  padding: 0;

  &:hover {
    filter: brightness(1.05);
  }

  &:hover span {
    transform: translateY(-17px);
  }

  &:active {
    filter: brightness(0.95);
  }

  &:active span {
    transform: translateY(-8px);
  }
`;

export const Label = styled(Paragraph)`
  text-transform: uppercase;

  position: absolute;
  top: 9px;
  left: 20px;
`;

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
