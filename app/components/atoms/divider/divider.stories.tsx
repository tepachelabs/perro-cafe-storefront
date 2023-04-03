import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Divider} from './divider.component';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider />;

export const Default = Template.bind({});
