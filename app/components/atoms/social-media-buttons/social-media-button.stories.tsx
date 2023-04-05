import {ComponentMeta, ComponentStory} from '@storybook/react';

import {
  InstagramButton,
  FacebookButton,
  TwitterButton,
} from './social-media-button.component';

export default {
  title: 'Atoms/SocialMediaButton',
  component: InstagramButton,
} as ComponentMeta<typeof InstagramButton>;

const Template: ComponentStory<typeof InstagramButton> = () => (
  <>
    <div
      style={{display: 'flex', justifyContent: 'space-evenly', width: '20em'}}
    >
      <InstagramButton />
      <FacebookButton />
      <TwitterButton />
    </div>
    <br />
    <div
      style={{display: 'flex', justifyContent: 'space-evenly', width: '20em'}}
    >
      <InstagramButton dark />
      <FacebookButton dark />
      <TwitterButton dark />
    </div>
  </>
);

export const Default = Template.bind({});
