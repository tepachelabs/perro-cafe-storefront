import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Line} from './Line.component';

export default {
  title: 'Atoms/Line',
  component: Line,
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => (
  <Line {...args} />
);

export const LineExample= Template.bind({});
LineExample.args = {
  size: 'small',
  color: 'dark',
};
