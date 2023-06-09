import {FC, ReactNode} from 'react';

import events from './img/events.svg';
import games from './img/games.svg';
import ingredients from './img/ingredients.svg';
import internet from './img/internet.svg';
import {Label, LeadingIcon, PerkItem, Section} from './perk-info.styles';

export interface PerkInfoProps {
  children?: ReactNode;
  icon: 'internet' | 'ingredients' | 'games' | 'events';
}

interface Icon {
  src: string;
  alt: string;
}

const icons: Record<string, Icon> = {
  internet: {src: internet, alt: 'Icono de internet'},
  ingredients: {src: ingredients, alt: 'Icono de ingredientes 100 % naturales'},
  games: {src: games, alt: 'Icono de juegos de mesa'},
  events: {src: events, alt: 'Icono de hospedaje de eventos'},
};

export const PerkInfo: FC<PerkInfoProps> = ({icon, children}) => {
  const {src, alt} = icons[icon];
  return (
    <PerkItem>
      <LeadingIcon src={src} alt={alt} />
      <Section>
        <Label>{children}</Label>
      </Section>
    </PerkItem>
  );
};
