import {StoryObj, Meta} from '@storybook/react';

import {ExplosionBadge} from './explosion-badge.component';

export default {
  title: 'Atoms/ExplosionBadge',
  component: ExplosionBadge,
} as Meta<typeof ExplosionBadge>;

type Story = StoryObj<typeof ExplosionBadge>;

export const Default: Story = {
  render: (args) => <ExplosionBadge {...args} />,
  args: {label: 'HMO.'},
};
