import cult from './img/cult.svg';
import menu from './img/menu.svg';
import temple from './img/temple.svg';
import {
  Label,
  LeadingIcon,
  StyledSectionName,
  Border,
} from './section-name.styles';

export const Menu = () => (
  <StyledSectionName>
    <LeadingIcon src={menu} />
    <Label>
      EL MENÚ
      <Border />
    </Label>
  </StyledSectionName>
);

export const Cult = () => (
  <StyledSectionName>
    <LeadingIcon src={cult} />
    <Label>
      EL CULTO
      <Border />
    </Label>
  </StyledSectionName>
);

export const Temple = () => (
  <StyledSectionName>
    <LeadingIcon src={temple} />
    <Label>
      EL TEMPLO
      <Border />
    </Label>
  </StyledSectionName>
);

export const Community = () => (
  <StyledSectionName>
    <LeadingIcon src={temple} />
    <Label>
      COMUNIDAD
      <Border />
    </Label>
  </StyledSectionName>
);
