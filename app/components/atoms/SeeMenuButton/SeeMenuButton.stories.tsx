import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SeeMenuButton} from './SeeMenuButton.component';

export default {
  title: 'Atoms/SeeMenuButton',
  component: SeeMenuButton,
} as ComponentMeta<typeof SeeMenuButton>;

const Template: ComponentStory<typeof SeeMenuButton> = (args) => (
  <SeeMenuButton {...args}>
    <span className="btn-shadow"></span>
    <span className="btn-front">SeeMenuButton</span>
  </SeeMenuButton>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};
