import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './socialMediaButton.component';

export default {
  title: 'Atoms/SocialMediaButton',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const InstagramButton = Template.bind({});
InstagramButton.args = {
  variant: 'light',
  children: 'Instagram',
};

export const FacebookButton = Template.bind({});
FacebookButton.args = {
  variant: 'light',
  children: 'Facebook',
};

export const TwitterButton = Template.bind({});
TwitterButton.args = {
  variant: 'light',
  children: 'Twitter',
};
