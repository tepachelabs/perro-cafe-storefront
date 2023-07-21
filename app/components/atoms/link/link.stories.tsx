import {Meta, StoryObj} from '@storybook/react';

import {CustomLink, Link} from './link.component';

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: (args) => <Link {...args} />,
  args: {
    to: 'https://perro.cafe/',
    children: <p>Culto al Perro Café</p>,
    linkRender: (props) => <CustomLink {...props} />,
  },
};

// export const Default = Template.bind({});
// Default.args = {
//   to: 'https://perro.cafe',
//   children: <p>Culto al Perro Café</p>,
//   linkRender: (props) => <CustomLink {...props} />,
// };
