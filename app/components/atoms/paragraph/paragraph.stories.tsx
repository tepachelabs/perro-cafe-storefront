import {StoryObj, Meta} from '@storybook/react';

import {Paragraph} from './paragraph.component';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
} as Meta<typeof Paragraph>;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  render: (args) => <Paragraph {...args} />,
  args: {
    children:
      'Lorem ipsum dolor sit amet, conctetuer adipiscing elit volutpat. Hendrerit invulputatevelit esse  Utwisi enim ad minimveniam.',
    lineHeight: 1.5,
    bold: false,
    italic: false,
  },
};
