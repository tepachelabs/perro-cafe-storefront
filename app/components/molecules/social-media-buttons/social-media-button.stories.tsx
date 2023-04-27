import {ComponentMeta, ComponentStory} from '@storybook/react';

import {
  FacebookButton,
  InstagramButton,
  TwitterButton,
} from './social-media-button.component';

export default {
  title: 'Molecules/SocialMediaButton',
} as ComponentMeta<typeof FacebookButton>;

const Template: ComponentStory<typeof FacebookButton> = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '1em',
      backgroundColor: '#9f7d7d',
      padding: '1em',
    }}
  >
    <FacebookButton {...args} />
    <InstagramButton {...args} />
    <TwitterButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: 36,
  href: '#',
  inverted: false,
};

export const Inverted = Template.bind({});
Inverted.args = {
  size: 36,
  href: '#',
  inverted: true,
};
