import React, {FC} from 'react';

import userOne from './img/one.svg';
import userThree from './img/three.svg';
import userTwo from './img/two.svg';
import {
  Author,
  Content,
  Frame,
  Img,
  Review,
  ReviewCardVariant,
} from './review-card.styles';

interface ReviewCardProps {
  author: string;
  review: string;
  variant?: ReviewCardVariant;
}

const authorImages: Record<ReviewCardVariant, string> = {
  green: userOne,
  orange: userThree,
  yellow: userTwo,
};

export const ReviewCard: FC<ReviewCardProps> = ({
  author,
  review,
  variant = 'yellow',
}) => {
  return (
    <Frame variant={variant}>
      <Img src={authorImages[variant]} alt="Rostro humano" />
      <Content>
        <Review>{review}</Review>
        <Author>{author}</Author>
      </Content>
    </Frame>
  );
};
