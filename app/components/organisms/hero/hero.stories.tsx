import {Meta, StoryObj} from '@storybook/react';

import {Hero} from './hero.component';
import {CustomLink} from '../../atoms/link';

export default {
  title: 'Organisms/Hero',
  component: Hero,
} as Meta<typeof Hero>;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {render: () => <Hero linkRender={CustomLink} />};
