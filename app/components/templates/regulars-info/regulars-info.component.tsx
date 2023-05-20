import {FC} from 'react';

import {
  BlockDivider,
  Grid,
  InfoBlock,
  InfoSection,
  SectionDividerContainer,
} from './regulars-info.styles';
import configData from '../../../config.json';
import useMediaQuery from '../../../hooks/use-media-query';
import {Divider} from '../../atoms/divider';
import {Paragraph} from '../../atoms/paragraph';
import {Subtitle} from '../../molecules/subtitle';

const {regularsDisclaimer} = configData;

export interface RegularsInfoBlock {
  index?: string;
  title?: string;
  body?: string;
  footer?: string;
}

interface Props {
  infoBlocks: RegularsInfoBlock[];
}

export const RegularsInfo: FC<Props> = ({infoBlocks}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <InfoSection>
      <Grid>
        {infoBlocks.map((info, index, arr) => {
          const renderBlockDivider = isDesktop
            ? index < arr.length - (2 - (arr.length % 2))
            : index < arr.length - 1;

          return (
            <InfoBlock key={info.title}>
              <Subtitle numeral={`${index + 1}.`}>{info.title}</Subtitle>
              <Paragraph>{info.body}</Paragraph>
              <Paragraph bold>{info.footer}</Paragraph>
              {renderBlockDivider && <BlockDivider />}
            </InfoBlock>
          );
        })}
      </Grid>
      <SectionDividerContainer>
        <Divider />
      </SectionDividerContainer>
      <Paragraph>{regularsDisclaimer}</Paragraph>
    </InfoSection>
  );
};
