import {Meta, StoryObj} from '@storybook/react';

import {PageHero as PageHero} from './page-hero.component';
import {CustomLink} from '../../atoms/link';

export default {
  title: 'Organisms/PageHero',
  component: PageHero,
} as Meta<typeof PageHero>;

type Story = StoryObj<typeof PageHero>;

export const Default: Story = {
  render: (args) => <PageHero {...args} />,
  args: {
    linkRender: (props) => <CustomLink {...props} />,
  },
};
