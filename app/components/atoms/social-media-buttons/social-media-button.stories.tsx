import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SocialMediaButton} from './social-media-button.component';

export default {
  title: 'Atoms/SocialMediaButton',
  component: SocialMediaButton,
} as ComponentMeta<typeof SocialMediaButton>;

const Template: ComponentStory<typeof SocialMediaButton> = (args) => (
  <SocialMediaButton {...args} />
);

export const InstagramButton = Template.bind({});
InstagramButton.args = {
  variant: 'light',
  socialMediaIcon: 'Instagram',
};

export const FacebookButton = Template.bind({});
FacebookButton.args = {
  variant: 'light',
  socialMediaIcon: 'Facebook',
};

export const TwitterButton = Template.bind({});
TwitterButton.args = {
  variant: 'light',
  socialMediaIcon: 'Twitter',
};
