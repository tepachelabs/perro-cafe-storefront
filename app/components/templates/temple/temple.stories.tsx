import {Meta, StoryObj} from '@storybook/react';

import {Temple} from './temple.component';
import {CustomLink} from '../../atoms/link';

export default {
  title: 'Templates/Temple',
  component: Temple,
} as Meta<typeof Temple>;

type Story = StoryObj<typeof Temple>;

export const Default: Story = {
  render: () => <Temple linkRender={CustomLink} />,
};
