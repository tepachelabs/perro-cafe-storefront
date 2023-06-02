import {ComponentMeta, ComponentStory} from '@storybook/react';

import {RegularsInfo} from './regulars-info.component';

export default {
  title: 'Templates/Information',
  component: RegularsInfo,
} as ComponentMeta<typeof RegularsInfo>;

const content =
  '<h2>Subtitle</h2>\n<p>Lorem ipsum dolor sit amet.</p>\n<h2>Subtitle</h2>\n<p>Lorem ipsum dolor sit amet.</p>\n<h2>Subtitle</h2>\n<p>Lorem ipsum dolor sit amet.</p>';

const Template: ComponentStory<typeof RegularsInfo> = () => (
  <RegularsInfo content={content} />
);

export const Default = Template.bind({});
