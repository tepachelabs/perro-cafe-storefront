import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ArrowButton, LeftArrow, RightArrow} from './arrow-button.component';

export default {
  title: 'Atoms/ArrowButton',
} as ComponentMeta<typeof ArrowButton>;

const Template: ComponentStory<typeof ArrowButton> = (args) => (
  <div style={{display: 'flex', gap: '1em'}}>
    <LeftArrow {...args} />
    <RightArrow {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'buttons',
  onClick: action('click'),
};
