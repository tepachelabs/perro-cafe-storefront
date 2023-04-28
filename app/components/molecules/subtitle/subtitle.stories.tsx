import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Subtitle, TitleSectionProps} from './subtitle.component';

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

export const Default: ComponentStory<typeof Subtitle> = () => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '2em'}}>
    {sampleSubtitles.map(({title, icon}) => (
      <Subtitle key={title} icon={icon}>
        {title}
      </Subtitle>
    ))}
  </div>
);
