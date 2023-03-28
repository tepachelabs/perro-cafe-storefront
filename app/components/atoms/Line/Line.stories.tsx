import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Line} from './Line.component';

export default {
  title: 'Atoms/Line',
  component: Line,
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => (
  <Line {...args} />
);

export const LineSmall= Template.bind({});
LineSmall.args = {
  size: 'small',
  color: 'dark',
};

export const LineMedium= Template.bind({});
LineMedium.args = {
  size: 'medium',
  color: 'dark',
};

export const LineMax= Template.bind({});
LineMax.args = {
  size: 'max',
  color: 'dark',
};