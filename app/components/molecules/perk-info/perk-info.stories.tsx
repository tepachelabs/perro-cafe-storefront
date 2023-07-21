import {Meta, StoryObj} from '@storybook/react';

import {PerkInfo} from './perk-info.component';

export default {
  title: 'Molecules/PerkInfo',
  component: PerkInfo,
} as Meta<typeof PerkInfo>;

type Story = StoryObj<typeof PerkInfo>;

export const GamesPerk: Story = {
  render: (args) => <PerkInfo {...args} />,
  args: {icon: 'games', children: 'Juegos de mesa'},
};

export const EventsPerk: Story = {
  render: (args) => <PerkInfo {...args} />,
  args: {icon: 'events', children: 'Hosteo de eventos'},
};

export const IngredientsPerk: Story = {
  render: (args) => <PerkInfo {...args} />,
  args: {icon: 'ingredients', children: 'Ingredientes 100% naturales'},
};

export const InternetPerk: Story = {
  render: (args) => <PerkInfo {...args} />,
  args: {icon: 'internet', children: 'Internet Rápido'},
};
