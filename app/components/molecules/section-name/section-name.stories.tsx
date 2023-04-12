import {ComponentMeta, ComponentStory} from '@storybook/react';

import {SectionName} from './section-name.component';

export default {
  title: 'Molecules/SectionName',
  component: SectionName,
} as ComponentMeta<typeof SectionName>;

const Template: ComponentStory<typeof SectionName> = (args) => (
  <SectionName {...args} />
);

export const Menu = Template.bind({});
Menu.args = {
  variant: 'menu',
  label: 'El Menú',
};

export const Cult = Template.bind({});
Cult.args = {
  variant: 'cult',
  label: 'El Culto',
};

export const Temple = Template.bind({});
Temple.args = {
  variant: 'temple',
  label: 'El Templo',
};

export const Community = Template.bind({});
Community.args = {
  variant: 'community',
  label: 'Comunidad',
};

export const RegularClients = Template.bind({});
RegularClients.args = {
  variant: 'iconless',
  label: 'Programa de Clientes Frecuentes',
};
