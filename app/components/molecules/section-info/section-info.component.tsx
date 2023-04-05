import {FC} from 'react';

import events from './img/events.svg';
import games from './img/games.svg';
import ingredients from './img/ingredients.svg';
import internet from './img/internet.svg';
import {LeadingIcon, Props, StyledSectionInfo} from './section-info.styles';
import {Paragraph} from '../../atoms/paragraph';

export const InternetInfo = () => {
  return (
    <>
      <LeadingIcon src={internet} />
      <StyledSectionInfo>
        <Paragraph bold>Internet Rápido</Paragraph>
      </StyledSectionInfo>
    </>
  );
};

export const IngredientsInfo = () => {
  return (
    <>
      <LeadingIcon src={ingredients} />
      <StyledSectionInfo>
        <Paragraph bold>Ingredientes 100% naturales</Paragraph>
      </StyledSectionInfo>
    </>
  );
};

export const GamesInfo = () => {
  return (
    <>
      <LeadingIcon src={games} />
      <StyledSectionInfo>
        <Paragraph bold>Juegos de mesa</Paragraph>
      </StyledSectionInfo>
    </>
  );
};

export const EventsInfo = () => {
  return (
    <>
      <LeadingIcon src={events} />
      <StyledSectionInfo>
        <Paragraph bold>Hosteo de eventos</Paragraph>
      </StyledSectionInfo>
    </>
  );
};
