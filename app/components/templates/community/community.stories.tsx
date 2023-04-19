import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Community} from './community.component';
import configData from '../../../config/config.json';

export default {
  title: 'Templates/Community',
  component: Community,
} as ComponentMeta<typeof Community>;

const Template: ComponentStory<typeof Community> = (args) => (
  <Community {...args} />
);

export const Default = Template.bind({});
Default.args = {
  reviews: configData.community.reviews,
};
