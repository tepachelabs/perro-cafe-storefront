import {Meta, StoryObj} from '@storybook/react';

import {
  FacebookButton,
  InstagramButton,
  TwitterButton,
} from './social-media-button.component';

export default {
  title: 'Molecules/SocialMediaButton',
} as Meta<typeof FacebookButton>;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '1em',
        backgroundColor: '#9f7d7d',
        padding: '1em',
      }}
    >
      <FacebookButton href="#" {...args} />
      <InstagramButton href="#" {...args} />
      <TwitterButton href="#" {...args} />
    </div>
  ),

  args: {
    size: 36,
    href: '#',
    inverted: false,
  },
};

export const Inverted: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '1em',
        backgroundColor: '#9f7d7d',
        padding: '1em',
      }}
    >
      <FacebookButton href="#" {...args} />
      <InstagramButton href="#" {...args} />
      <TwitterButton href="#" {...args} />
    </div>
  ),

  args: {
    ...Default.args,
    inverted: true,
  },
};

// export const Default = Template.bind({});
// Default.args = {
//   size: 36,
//   href: '#',
//   inverted: false,
// };

// export const Inverted = Template.bind({});
// Inverted.args = {
//   size: 36,
//   href: '#',
//   inverted: true,
// };
