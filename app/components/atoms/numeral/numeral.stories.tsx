import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Numeral} from './numeral.component';

export default {
  title: 'Atoms/Numeral',
  component: Numeral,
} as ComponentMeta<typeof Numeral>;

const Template: ComponentStory<typeof Numeral> = (args) => (
  <Numeral {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: '1.',
};
