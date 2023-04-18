import {FC, ReactNode} from 'react';

import events from './img/events.svg';
import games from './img/games.svg';
import ingredients from './img/ingredients.svg';
import internet from './img/internet.svg';
import {Label, LeadingIcon, Section} from './perk-info.styles';

export interface PerkInfoProps {
  children?: ReactNode;
  icon: 'internet' | 'ingredients' | 'games' | 'events';
}

const icons = {
  internet,
  ingredients,
  games,
  events,
};

export const PerkInfo: FC<PerkInfoProps> = ({icon, children}) => {
  const iconSrc = icons[icon];
  return (
    <>
      <LeadingIcon src={iconSrc} />
      <Section>
        <Label>{children}</Label>
      </Section>
    </>
  );
};
