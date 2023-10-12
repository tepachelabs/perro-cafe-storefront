import {action} from '@storybook/addon-actions';
import {Meta, StoryObj} from '@storybook/react';

import {ArrowButton, LeftArrow, RightArrow} from './arrow-button.component';

const meta: Meta<typeof ArrowButton> = {
  title: 'Atoms/ArrowButton',
  component: ArrowButton,
};
export default meta;

type Story = StoryObj<typeof ArrowButton>;

export const Default: Story = {
  render: (args) => (
    <div style={{display: 'flex', gap: '1em'}}>
      <LeftArrow {...args} />
      <RightArrow {...args} />
    </div>
  ),
  args: {
    title: 'buttons',
    onClick: action('click'),
  },
};
