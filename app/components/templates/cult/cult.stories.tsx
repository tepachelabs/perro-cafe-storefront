import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Cult} from './cult.component';
import configData from '../../../config.json';

export default {
  title: 'Templates/Cult',
  component: Cult,
} as ComponentMeta<typeof Cult>;

const Template: ComponentStory<typeof Cult> = (args) => <Cult {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: configData.cult.images,
};
