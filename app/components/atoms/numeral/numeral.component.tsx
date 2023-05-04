import {FC} from 'react';

import numeralBackground from './img/numeral-bg.svg';
import {Frame, Img, Label} from './numeral.styles';

interface Props {
  label: string;
}

export const Numeral: FC<Props> = ({label}) => (
  <Frame>
    <Img src={numeralBackground} alt="Fondo del numeral" />
    <Label>{label}</Label>
  </Frame>
);
