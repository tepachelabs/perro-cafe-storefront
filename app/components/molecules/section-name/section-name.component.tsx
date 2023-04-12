import {FC} from 'react';

import cult from './img/cult.svg';
import menu from './img/menu.svg';
import temple from './img/temple.svg';
import {
  HrContainer,
  Label,
  LabelContainer,
  LeadingIcon,
  Props,
  StyledSectionName,
} from './section-name.styles';
import {Hr} from '../../atoms/hr';

export const SectionName: FC<Props> = ({variant = 'iconless', label}) => {
  let leadingIcon;

  switch (variant) {
    case 'cult':
      leadingIcon = cult;
      break;
    case 'menu':
      leadingIcon = menu;
      break;
    case 'temple':
      leadingIcon = temple;
      break;
    case 'community':
      leadingIcon = 'https://placehold.co/60x60.png';
      break;
    default:
      break;
  }

  return (
    <StyledSectionName>
      {leadingIcon && <LeadingIcon src={leadingIcon} />}
      <LabelContainer variant={variant}>
        <Label>{label}</Label>
        <HrContainer>
          <Hr />
        </HrContainer>
      </LabelContainer>
    </StyledSectionName>
  );
};
