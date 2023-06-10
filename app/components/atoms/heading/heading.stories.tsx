import {ComponentStory} from '@storybook/react';

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from '../heading/heading.component';

export default {
  title: 'Atoms/Heading',
};

const allHeadings = [
  {title: 'Heading1', component: Heading1},
  {title: 'Heading2', component: Heading2},
  {title: 'Heading3', component: Heading3},
  {title: 'Heading4', component: Heading4},
  {title: 'Heading5', component: Heading5},
  {title: 'Heading6', component: Heading6},
];

const Template: ComponentStory<typeof Heading1> = (args) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
    }}
  >
    {allHeadings.map(({title, component: HeadingComponent}) => (
      <div key={title} style={{textAlign: 'center'}}>
        <HeadingComponent {...args}>{title}</HeadingComponent>
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {};
