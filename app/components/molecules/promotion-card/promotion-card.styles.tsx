import styled from 'styled-components';

export interface PromotionCardProps {
  variant?: 'default' | 'recommendation' | 'seasonal';
  promoImageUrl?: string;
  label?: string;
}

export const Img = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const BadgeContainer = styled.div`
  height: 80px;
  width: 80px;

  position: absolute;
  top: 16px;
  right: 14px;
`;

export const Footer = styled.div`
  display: block;
  position: absolute;
  bottom: 0px;

  width: 100%;
  height: 30px;

  background-color: ${({theme}) => theme.colors.primary};

  font-size: 16px;
  font-weight: 700;
  font-family: ${({theme}) => theme.fonts.body};
  line-height: 30px;

  border-width: 3px 0 0 0;
  border-color: ${({theme}) => theme.colors.black};
  border-style: solid;

  text-align: center;
`;

export const StyledPromotionCard = styled.div<PromotionCardProps>`
  display: block;
  position: relative;

  height: 230px;
  width: 220px;

  border: 3px solid ${({theme}) => theme.colors.black};
`;
