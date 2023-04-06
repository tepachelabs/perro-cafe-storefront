import {ComponentMeta, ComponentStory} from '@storybook/react';

import {
  InstagramButton,
  FacebookButton,
  TwitterButton,
} from './social-media-button.component';

export default {
  title: 'Atoms/SocialMediaButton',
} as ComponentMeta<
  typeof InstagramButton | typeof FacebookButton | typeof TwitterButton
>;

const InstagramButtonTemplate: ComponentStory<typeof InstagramButton> = (
  args,
) => <InstagramButton {...args} />;

const FacebookButtonTemplate: ComponentStory<typeof FacebookButton> = (
  args,
) => <FacebookButton {...args} />;

const TwitterButtonTemplate: ComponentStory<typeof TwitterButton> = (args) => (
  <TwitterButton {...args} />
);

export const Instagram = InstagramButtonTemplate.bind({});
Instagram.args = {
  isDarkBackground: false,
};

export const Facebook = FacebookButtonTemplate.bind({});
Facebook.args = {
  isDarkBackground: false,
};

export const Twitter = TwitterButtonTemplate.bind({});
Twitter.args = {
  isDarkBackground: false,
};
