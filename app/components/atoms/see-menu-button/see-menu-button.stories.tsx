import {Meta, StoryObj} from '@storybook/react';

import {SeeMenuButton} from './see-menu-button.component';

export default {
  title: 'Atoms/SeeMenuButton',
  component: SeeMenuButton,
} as Meta<typeof SeeMenuButton>;

type Story = StoryObj<typeof SeeMenuButton>;

export const Default: Story = {
  render: (args) => <SeeMenuButton {...args} />,
  args: {href: 'https://www.instagram.com/cultoperrocafe'},
};

// export const Default = Template.bind({});
// Default.args = {
//   href: 'https://www.instagram.com/cultoperrocafe',
// };
