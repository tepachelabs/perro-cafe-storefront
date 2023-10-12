import {Meta, StoryObj} from '@storybook/react';

import {Hr} from './hr.component';

export default {
  title: 'Atoms/Hr',
  component: Hr,
} as Meta<typeof Hr>;

type Story = StoryObj<typeof Hr>;

export const Default: Story = {render: () => <Hr />};
