import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ExplosionBadge} from './explosion-badge.component';

export default {
  title: 'Atoms/ExplosionBadge',
  component: ExplosionBadge,
} as ComponentMeta<typeof ExplosionBadge>;

const Template: ComponentStory<typeof ExplosionBadge> = (args) => (
  <ExplosionBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'HMO.',
};
