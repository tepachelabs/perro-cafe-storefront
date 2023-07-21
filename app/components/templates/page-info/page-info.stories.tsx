import {Meta, StoryObj} from '@storybook/react';

import {PageInfo} from './page-info.component';
import {CustomLink} from '../../atoms/link';

export default {
  title: 'Templates/Information',
  component: PageInfo,
} as Meta<typeof PageInfo>;

type Story = StoryObj<typeof PageInfo>;

const content =
  '<h2>Subtitle</h2>\n<p>Lorem ipsum dolor sit amet.</p>\n<h2>Subtitle</h2>\n<p>Lorem ipsum dolor sit amet.</p>\n<h2>Subtitle</h2>\n<p>Lorem ipsum dolor sit amet.</p>';

export const Default: Story = {
  render: () => <PageInfo content={content} linkRender={CustomLink} />,
};
