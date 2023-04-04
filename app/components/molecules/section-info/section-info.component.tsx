import {FC} from 'react';

import {LeadingIcon, Props, StyledSectionInfo} from './section-info.styles';
import {Hr} from '../../atoms/hr';
import {Paragraph} from '../../atoms/paragraph';

export const InternetInfo = () => {
  return (
    <StyledSectionInfo>
      <LeadingIcon
        src={`static/media/app/components/molecules/section-info/img/internet.svg`}
      />
      <Hr />
      <Paragraph bold>Internet Rápido</Paragraph>
    </StyledSectionInfo>
  );
};

export const IngredientsInfo = () => {
  return (
    <StyledSectionInfo>
      <LeadingIcon
        src={`static/media/app/components/molecules/section-info/img/ingredients.svg`}
      />
      <Hr />
      <Paragraph bold>Ingredientes 100% naturales</Paragraph>
    </StyledSectionInfo>
  );
};

export const GamesInfo = () => {
  return (
    <StyledSectionInfo>
      <LeadingIcon
        src={`static/media/app/components/molecules/section-info/img/games.svg`}
      />
      <Hr />
      <Paragraph bold>Juegos de mesa</Paragraph>
    </StyledSectionInfo>
  );
};

export const EventsInfo = () => {
  return (
    <StyledSectionInfo>
      <LeadingIcon
        src={`static/media/app/components/molecules/section-info/img/events.svg`}
      />
      <Hr />
      <Paragraph bold>Hosteo de eventos</Paragraph>
    </StyledSectionInfo>
  );
};
