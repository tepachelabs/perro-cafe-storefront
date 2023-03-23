import {FC} from 'react';

import {
  Arrow,
  ButtonFace,
  ContentText,
  HorizontalButtonProps,
  StyledHorizontalButton,
} from './HorizontalButton.styles';

import arrow from './img/arrow.svg';

export const HorizontalButton: FC<HorizontalButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <StyledHorizontalButton {...props}>
      <ButtonFace>
        <ContentText>{label}</ContentText>
        <Arrow src={arrow} alt="Arrow graphic" />
      </ButtonFace>
    </StyledHorizontalButton>
  );
};
