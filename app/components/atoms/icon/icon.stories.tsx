import {ComponentMeta, ComponentStory} from '@storybook/react';

import {FacebookIcon, InstagramIcon, TwitterIcon} from './icon.component';
import {Paragraph} from '../paragraph';

export default {
  title: 'Atoms/Icon',
} as ComponentMeta<typeof FacebookIcon>;

const allIcons = [
  {title: 'FacebookIcon', component: FacebookIcon},
  {title: 'InstagramIcon', component: InstagramIcon},
  {title: 'TwitterIcon', component: TwitterIcon},
];

const Template: ComponentStory<typeof FacebookIcon> = (args) => (
  <div style={{display: 'flex', gap: '1em'}}>
    {allIcons.map(({title, component: IconComponent}) => (
      <div key={title} style={{textAlign: 'center'}}>
        <IconComponent {...args} />
        <Paragraph>{title}</Paragraph>
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  height: 36,
};
