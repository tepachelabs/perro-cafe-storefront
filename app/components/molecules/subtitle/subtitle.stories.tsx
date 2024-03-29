import {Meta, StoryObj} from '@storybook/react';

import {Subtitle} from './subtitle.component';
import {TitleSectionProps} from './subtitle.styles';

export default {
  title: 'Molecules/Subtitle',
} as Meta<typeof Subtitle>;

type Story = StoryObj<typeof Subtitle>;

const sampleSubtitles: Array<{title: string; icon: TitleSectionProps['icon']}> =
  [
    {title: 'El Menú', icon: 'menu'},
    {title: 'El Culto', icon: 'cult'},
    {title: 'El Templo', icon: 'temple'},
    {title: 'Comunidad', icon: 'community'},
  ];

const sampleNumerals: Array<{title: string; numeral: string}> = [
  {title: 'Lorem Ipsum', numeral: '1.'},
  {title: 'Lorem Ipsum', numeral: '2.'},
  {title: 'Lorem Ipsum', numeral: '3.'},
  {title: 'Lorem Ipsum', numeral: '4.'},
];

export const Default: Story = {
  render: () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2em'}}>
      {sampleSubtitles.map(({title, icon}) => (
        <Subtitle key={title} icon={icon}>
          {title}
        </Subtitle>
      ))}
    </div>
  ),
};

export const Numerals: Story = {
  render: () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2em'}}>
      {sampleNumerals.map(({title, numeral}) => (
        <Subtitle key={numeral} numeral={numeral}>
          {title}
        </Subtitle>
      ))}
    </div>
  ),
};
