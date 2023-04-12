import styled, {css} from 'styled-components';

export interface Props {
  variant: 'iconless' | 'cult' | 'menu' | 'temple' | 'community';
  label: string;
}

// The iconless variant needs a width of at least 400px to look on part
// with the design. Might have to look into this further.
const iconlessVariantStyles = css`
  min-width: 400px;
`;

// The menu variant's icon's dimensions are way different than the rest,
// so I added a dynamic style in order to make it look on part.
const menuVariantStyles = css`
  will-change: transform;
  transform: translateY(-12px);
`;

export const LeadingIcon = styled.img`
  width: 60px;

  margin-right: 8px;
`;

export const LabelContainer = styled.div<{variant: string}>`
  ${({variant}) => variant === 'iconless' && iconlessVariantStyles};

  ${({variant}) => variant === 'menu' && menuVariantStyles};
`;

export const Label = styled.h1`
  color: ${({theme}) => theme.colors.black};
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.title};
  font-size: 44px;
  text-transform: uppercase;
  line-height: 58px;

  margin-top: 12px;
  margin-bottom: 0;
`;

export const HrContainer = styled.span`
  display: block;

  width: 140px;
  margin-top: -4px;
  padding-left: 2px;
`;

export const StyledSectionName = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 300px;
`;
