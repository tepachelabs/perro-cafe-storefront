import {ComponentMeta, ComponentStory} from '@storybook/react';

import {SeeMenuButton} from './see-menu-button.component';

export default {
  title: 'Atoms/SeeMenuButton',
  component: SeeMenuButton,
} as ComponentMeta<typeof SeeMenuButton>;

const Template: ComponentStory<typeof SeeMenuButton> = (args) => (
  <SeeMenuButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
