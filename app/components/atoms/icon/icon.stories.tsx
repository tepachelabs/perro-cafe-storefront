import {Meta, StoryObj} from '@storybook/react';

import {FacebookIcon, InstagramIcon, TwitterIcon} from './icon.component';
import {Paragraph} from '../paragraph';

export default {
  title: 'Atoms/Icon',
} as Meta<typeof FacebookIcon>;

const allIcons = [
  {title: 'FacebookIcon', component: FacebookIcon},
  {title: 'InstagramIcon', component: InstagramIcon},
  {title: 'TwitterIcon', component: TwitterIcon},
];

type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <div style={{display: 'flex', gap: '1em'}}>
      {allIcons.map(({title, component: IconComponent}) => (
        <div key={title} style={{textAlign: 'center'}}>
          <IconComponent {...args} />
          <Paragraph>{title}</Paragraph>
        </div>
      ))}
    </div>
  ),
  args: {
    height: 36,
  },
};
