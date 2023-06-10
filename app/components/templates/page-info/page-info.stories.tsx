import {ComponentMeta, ComponentStory} from '@storybook/react';

import {PageInfo} from './page-info.component';

export default {
  title: 'Templates/Information',
  component: PageInfo,
} as ComponentMeta<typeof PageInfo>;

const content =
  '<h2>Subtitle</h2>\n<p>Lorem ipsum dolor sit amet.</p>\n<h2>Subtitle</h2>\n<p>Lorem ipsum dolor sit amet.</p>\n<h2>Subtitle</h2>\n<p>Lorem ipsum dolor sit amet.</p>';

const Template: ComponentStory<typeof PageInfo> = () => (
  <PageInfo content={content} />
);

export const Default = Template.bind({});
