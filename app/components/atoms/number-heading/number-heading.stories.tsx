import {ComponentMeta, ComponentStory} from '@storybook/react';

import {NumberHeading} from './number-heading.component';

export default {
  title: 'Atoms/NumberHeading',
  component: NumberHeading,
} as ComponentMeta<typeof NumberHeading>;

const Template: ComponentStory<typeof NumberHeading> = (args) => (
  <NumberHeading {...args} />
);

export const Number = Template.bind({});
Number.args = {
  children: '1.',
};
