import {ComponentMeta, ComponentStory} from '@storybook/react';

import {SocialMediaButton} from './social-media-button.component';

export default {
  title: 'Atoms/SocialMediaButton',
  component: SocialMediaButton,
} as ComponentMeta<typeof SocialMediaButton>;

const Template: ComponentStory<typeof SocialMediaButton> = (args) => (
  <SocialMediaButton {...args} />
);

export const Instagram = Template.bind({});
Instagram.args = {
  icon: 'instagram',
};

export const Facebook = Template.bind({});
Facebook.args = {
  icon: 'facebook',
};

export const Twitter = Template.bind({});
Twitter.args = {
  icon: 'twitter',
};

