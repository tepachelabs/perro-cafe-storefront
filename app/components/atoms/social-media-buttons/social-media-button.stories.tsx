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

const Template: ComponentStory<
  typeof InstagramButton | typeof FacebookButton | typeof TwitterButton
> = (args) => (
  <>
    <div
      style={{display: 'flex', justifyContent: 'space-evenly', width: '20em'}}
    >
      <InstagramButton {...args} />
      <FacebookButton {...args} />
      <TwitterButton {...args} />
    </div>
  </>
);

export const SocialMediaButton = Template.bind({});
SocialMediaButton.args = {
  dark: true,
};
