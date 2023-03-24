import React, {FC} from 'react';

import {
  Author,
  Content,
  Frame,
  Img,
  Review,
  ReviewCardVariant,
} from './review-card.styles';

import userOne from './img/one.svg';
import userTwo from './img/two.svg';
import userThree from './img/three.svg';

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
      <Img src={authorImages[variant]} alt="Human face" />
      <Content>
        <Review>{review}</Review>
        <Author>{author}</Author>
      </Content>
    </Frame>
  );
};
