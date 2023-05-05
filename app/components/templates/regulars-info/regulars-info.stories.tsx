import {ComponentMeta, ComponentStory} from '@storybook/react';

import {RegularsInfo} from './regulars-info.component';

export default {
  title: 'Templates/Information',
  component: RegularsInfo,
} as ComponentMeta<typeof RegularsInfo>;

const Template: ComponentStory<typeof RegularsInfo> = () => <RegularsInfo />;

export const Default = Template.bind({});
