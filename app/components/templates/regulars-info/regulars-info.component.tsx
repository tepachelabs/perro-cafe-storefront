import parse from 'html-react-parser';
import {FC} from 'react';

import {InfoSection, SectionDividerContainer} from './regulars-info.styles';
import configData from '../../../config.json';
import {Divider} from '../../atoms/divider';
import {Paragraph} from '../../atoms/paragraph';

const {regularsDisclaimer} = configData;

interface Props {
  content: string;
}

export const RegularsInfo: FC<Props> = ({content}) => (
  <InfoSection>
    {parse(content)}
    <SectionDividerContainer>
      <Divider />
    </SectionDividerContainer>
    <Paragraph>{regularsDisclaimer}</Paragraph>
  </InfoSection>
);
