import {ComponentMeta, ComponentStory} from '@storybook/react';

import {SectionInfo} from './section-info.component';

export default {
  title: 'Molecules/SectionInfo',
  component: SectionInfo,
} as ComponentMeta<typeof SectionInfo>;

const Template: ComponentStory<typeof SectionInfo> = (args) => (
  <SectionInfo {...args} />
);

export const Internet = Template.bind({});
Internet.args = {
  variant: 'internet',
  children: 'Internet rápido',
};

export const Ingredients = Template.bind({});
Ingredients.args = {
  variant: 'ingredients',
  children: 'Ingredientes 100% naturales',
};

export const Games = Template.bind({});
Games.args = {
  variant: 'games',
  children: 'Juegos de mesa',
};

export const Events = Template.bind({});
Events.args = {
  variant: 'events',
  children: 'Hosteo de eventos',
};
