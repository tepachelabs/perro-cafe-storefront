import {FC, ReactNode} from 'react';

import events from './img/events.svg';
import games from './img/games.svg';
import ingredients from './img/ingredients.svg';
import internet from './img/internet.svg';
import {LeadingIcon, Section} from './perk-info.styles';

export interface Props {
  icon?: 'internet' | 'ingredients' | 'games' | 'events';
  children: ReactNode;
}

export const PerkInfo: FC<Props> = (props) => {
  const image = {
    internet,
    ingredients,
    games,
    events,
  };

  const {icon, children} = props;
  return (
    <>
      {icon && <LeadingIcon src={image[icon]} />}
      <Section>{children}</Section>
    </>
  );
};
