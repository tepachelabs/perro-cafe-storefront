import {StoryObj, Meta} from '@storybook/react';

import {Divider} from './divider.component';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {render: () => <Divider />};
