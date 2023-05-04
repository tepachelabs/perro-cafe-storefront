import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Subtitle} from './subtitle.component';
import {TitleSectionProps} from './subtitle.styles';

export default {
  title: 'Molecules/Subtitle',
} as ComponentMeta<typeof Subtitle>;

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

export const Default: ComponentStory<typeof Subtitle> = () => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '2em'}}>
    {sampleSubtitles.map(({title, icon}) => (
      <Subtitle key={title} icon={icon}>
        {title}
      </Subtitle>
    ))}
  </div>
);

export const Numerals: ComponentStory<typeof Subtitle> = () => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '2em'}}>
    {sampleNumerals.map(({title, numeral}) => (
      <Subtitle key={title} numeral={numeral}>
        {title}
      </Subtitle>
    ))}
  </div>
);
