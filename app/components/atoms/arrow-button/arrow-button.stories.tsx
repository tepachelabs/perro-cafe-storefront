import {ComponentMeta, ComponentStory} from '@storybook/react';

import {LeftArrow, RightArrow} from './arrow-button.component';

export default {
  title: 'Atoms/ArrowButton',
} as ComponentMeta<typeof LeftArrow | typeof RightArrow>;

const LeftArrowTemplate: ComponentStory<typeof LeftArrow> = (args) => (
  <LeftArrow {...args} />
);

export const Left = LeftArrowTemplate.bind({});
Left.args = {};

const RightArrowTemplate: ComponentStory<typeof RightArrow> = (args) => (
  <RightArrow {...args} />
);

export const Right = RightArrowTemplate.bind({});
Right.args = {};
