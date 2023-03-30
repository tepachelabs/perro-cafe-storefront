import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Paragraph} from './Paragraph.component';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const ParagraphDefault = Template.bind({});
ParagraphDefault.args = {
  children: 'Lorem ipsum dolor sit amet, conctetuer adipiscing elit volutpat. Hendrerit invulputatevelit esse  Utwisi enim ad minimveniam.',
  lineHeight: 1.5,
  bold: false,
  italic: false,
};

