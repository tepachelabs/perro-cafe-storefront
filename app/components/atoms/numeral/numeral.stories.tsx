import {Meta, StoryObj} from '@storybook/react';

import {Numeral} from './numeral.component';

export default {
  title: 'Atoms/Numeral',
  component: Numeral,
} as Meta<typeof Numeral>;

type Story = StoryObj<typeof Numeral>;

export const Default: Story = {
  render: (args) => <Numeral {...args} />,
  args: {label: '1.'},
};
