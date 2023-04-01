import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './social-media-button.component';

export default {
  title: 'Atoms/SocialMediaButton',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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