import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Hr} from './hr.component';

export default {
  title: 'Atoms/Hr',
  component: Hr,
} as ComponentMeta<typeof Hr>;

const Template: ComponentStory<typeof Hr> = () => <Hr />;

export const Default = Template.bind({});
