import styled from '@emotion/styled';

export const ButtonFace = styled.img`
  display: block;
  position: relative;
  padding: 0;
  border-radius: 50%;
  width: 131px;
  height: 131px;
  left: -9px;

  will-change: transform;
  transform: translateY(calc(${(props) => props.theme.sizes.borderWidth} * -4));
  transition: transform 200ms ease;
`;

export const StyledSeeMenuButton = styled.a`
  display: block;

  background-color: #c04625;
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.colors.black};
  outline-offset: 4px;
  padding: 0;

  transition: all 200ms ease;
  will-change: transform;
  transform: translateY(calc(${(props) => props.theme.sizes.borderWidth} * 4));

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    filter: brightness(0.95);
  }

  &:hover img {
    transform: translateY(
      calc(${(props) => props.theme.sizes.borderWidth} * -4.5)
    );
  }

  &:active img {
    transform: translateY(
      calc(${(props) => props.theme.sizes.borderWidth} * -2.5)
    );
  }
`;

export const VerticalLine = styled.div<{
  top?: number;
  left?: number;
}>`
  background: ${(props) => props.theme.colors.black};
  display: block;
  position: absolute;
  width: 3px;
  height: 16px;

  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
`;
