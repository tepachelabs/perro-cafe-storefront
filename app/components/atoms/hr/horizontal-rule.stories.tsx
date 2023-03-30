import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Hr} from './horizontal-rule.component';

export default {
  title: 'Atoms/HorizontalRule',
  component: Hr,
} as ComponentMeta<typeof Hr>;

const Template: ComponentStory<typeof Hr> = () => <Hr />;

export const HorizontalRule = Template.bind({});
