import {ComponentMeta, ComponentStory} from '@storybook/react';

import {CustomLink, Link} from './link.component';

export default {
  title: 'Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: 'https://perro.cafe',
  children: <p>Culto al Perro Café</p>,
  linkRender: (props) => <CustomLink {...props} />,
};
