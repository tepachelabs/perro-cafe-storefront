import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from './socialMediaButton.component';

export default {
  title: 'Atoms/SocialMediaButton',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Instagram = Template.bind({});
Instagram.args = {
  variant: 'light',
  socialMediaIcon: 'Instagram',
};

export const Facebook = Template.bind({});
Facebook.args = {
  variant: 'light',
  socialMediaIcon: 'Facebook',
};

export const Twitter = Template.bind({});
Twitter.args = {
  variant: 'light',
  socialMediaIcon: 'Twitter',
};
