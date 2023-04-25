import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Temple} from './temple.component';

export default {
  title: 'Templates/Temple',
  component: Temple,
} as ComponentMeta<typeof Temple>;

const Template: ComponentStory<typeof Temple> = () => <Temple />;

export const Default = Template.bind({});
