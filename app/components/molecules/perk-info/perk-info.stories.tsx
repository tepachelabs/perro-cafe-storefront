import {ComponentMeta, ComponentStory} from '@storybook/react';

import {PerkInfo} from './perk-info.component';

export default {
  title: 'Molecules/PerkInfo',
  component: PerkInfo,
} as ComponentMeta<typeof PerkInfo>;

const Template: ComponentStory<typeof PerkInfo> = (args) => (
  <PerkInfo {...args} />
);

export const GamesPerk = Template.bind({});
GamesPerk.args = {
  icon: 'games',
  children: 'Juegos de mesa',
};

export const EventsPerk = Template.bind({});
EventsPerk.args = {
  icon: 'events',
  children: 'Hosteo de eventos',
};

export const IngredientsPerk = Template.bind({});
IngredientsPerk.args = {
  icon: 'ingredients',
  children: 'Ingredientes 100% naturales',
};

export const InternetPerk = Template.bind({});
InternetPerk.args = {
  icon: 'internet',
  children: 'Internet Rápido',
};
