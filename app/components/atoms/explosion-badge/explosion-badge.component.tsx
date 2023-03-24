import React, {FC} from 'react';

import {Frame, Img, Label} from './explosion-badge.styles';

import graphic from './img/explosion-graphic.svg';

interface Props {
  label?: string;
}

export const ExplosionBadge: FC<Props> = ({label}) => {
  return (
    <Frame>
      <Img src={graphic} alt={label} />
      <Label>{label}</Label>
    </Frame>
  );
};
